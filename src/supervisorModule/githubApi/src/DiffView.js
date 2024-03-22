import React, { Component } from 'react';
import { parseDiff, Diff, Hunk, Decoration } from 'react-diff-view';
import { FaSpinner } from 'react-icons/fa';

class DiffView extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      diffText: '',
      commitSha: '',
      loading: false
    };

    this.state = this.initialState;
    this.mockData = {
      commitSha: '825ff569410dd063755873a37326513f807f914b',
      diffText: `diff --git a/grails-app/services/com/netflix/asgard/FastPropertyService.groovy b/grails-app/services/com/netflix/asgard/FastPropertyService.groovy
index 9ca9fb81..0bc85ac3 100644
--- a/grails-app/services/com/netflix/asgard/FastPropertyService.groovy
+++ b/grails-app/services/com/netflix/asgard/FastPropertyService.groovy
@@ -57,7 +57,12 @@ class FastPropertyService implements CacheInitializer {
                     FastProperty.fromXml(fastPropertyData)
                 }
             } else {
-                throw new ServerException("Failure to fetch fast property list from $/{url}")
+                // throw new ServerException("Failure to fetch fast property list from $/{url}")
+                // This API call no longer works and prevents the app from starting up properly.
+                // CRUD operations for fast properties are not used so we are just going to log the error and return an
+                // empty list to the cache.
+                log.warn("Failure to fetch fast property list from $/{url}")
+                return []
             }
         }
         []
@@ -255,6 +260,6 @@ class FastPropertyService implements CacheInitializer {
     private String platformServiceHostAndPort(UserContext userContext) {
         String host = configService.getRegionalPlatformServiceServer(userContext.region)
         String port = configService.platformServicePort
-        (configService.online && host && port) ? "$/{host}:$/{port}" : null
+        ((configService.online || true) && host && port) ? "$/{host}:$/{port}" : null
     }
 }
`
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.commitSha !== prevProps.commitSha) {
      if (this.props.commitSha) {
        console.log("Load diff...");
        this.setState({ loading: true }); // Set loading to true when fetching data

        if (process.env.REACT_APP_USE_GITHUB_API === "true") {
          const { org, repoName, commitSha } = this.props;
          const url = `https://api.github.com/repos/${org}/${repoName}/commits/${commitSha}`;

          fetch(url, {
            headers: {
              "Accept": "application/vnd.github.VERSION.diff"
            }
          })
            .then(response => {
              response.text().then(diffText => {
                this.setState({
                  commitSha: commitSha,
                  diffText: diffText,
                  loading: false // Set loading to false after data is fetched
                });
              });
            });
        } else {
          this.setState({ ...this.mockData, loading: false }); // Set loading to false after data is fetched
        }
      } else {
        this.setState(this.initialState);
      }
    }
  }

  

  render() {
    const { diffText, commitSha, loading } = this.state;

    if (loading) {
      return <FaSpinner className="spinner" />;
    }

    if (diffText && commitSha) {
      const files = parseDiff(diffText);

      const renderFile = ({ oldRevision, newRevision, type, hunks }) => (
        <Diff key={oldRevision + '-' + newRevision} viewType="split" diffType={type} hunks={hunks}>
          {hunks => hunks.map(hunk => (
            <Decoration key={'decoration-' + hunk.content}>
              {hunk.content}
            </Decoration>,
            <Hunk key={hunk.content} hunk={hunk} />
          ))}
        </Diff>
      );

      return (
        <div className='container'>
          <h4>Diff</h4>
   {files.map(renderFile)}
        </div>
      );
    }
    return null;
  }
}

export default DiffView;
