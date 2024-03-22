import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import { FaSpinner } from 'react-icons/fa';
import DiffView from './DiffView';
class CommitView extends Component {
  
  constructor(props) {

    super(props);
    this.state = {
      org: '',
      repoName: '',
      repoCommits: [],
      loading: false
    };

    // Hard coded repo commits to avoid exceeding rate limit
    this.mockData = {
      repoCommits: [
        {
          "sha": "648102625a4b6d2c3669b7837c2a5768c20b16a3",
          "commit": {
            "message": "Update OSSMETADATA\n\nAsgard is unused at Netflix",
          }
        },
        {
          "sha": "825ff569410dd063755873a37326513f807f914b",
          "commit": {
            "message": "Merge pull request #723 from zanthrash/fix_fp_cache\n\nremoves Fast Property caching so app can start up.",
          }
        }
      ]
    };
  }

  componentDidUpdate(prevProps) {
    const REACT_APP_USE_GITHUB_API = true;

    if (this.props.repoName !== prevProps.repoName) {
      if (this.props.repoName) {
        console.log("Load commits...");

        this.setState({ loading: true }); // Set loading to true when fetching data

        if (REACT_APP_USE_GITHUB_API === true) {
          const { org, repoName } = this.props;

          const url =
            'https://api.github.com/repos/' + org + '/' + repoName + '/commits';

          fetch(url)
            .then(result => result.json())
            .then(commits => {
              this.setState({
                repoCommits: commits,
                loading: false // Set loading to false after data is fetched
              });
            });
        } else {
          this.setState({ repoCommits: this.mockData.repoCommits, loading: false });
        }
      } else {
        // clear the view
        this.setState({ ...this.initialState, loading: false });
      }
    }
  }

  handleClick(event, entry) {
    this.props.updateDiffView(entry.sha);
  }

  render() {
    const { repoCommits, loading } = this.state;

    if (loading) {
      return <FaSpinner className="spinner" />;
    }

    if (repoCommits && repoCommits.length > 0) {
      const commits = repoCommits.map((entry, index) => (
       
       <div key={index} onClick={(e) => this.handleClick(e, entry)}>

<Accordion defaultActiveKey="">
  <Accordion.Item eventKey={index}>
    <Accordion.Header>{entry.commit.author.date} {entry.commit.author.name} </Accordion.Header>
    <Accordion.Body>
    Commit Message : 
   <p className="link-warning">
   {entry.commit.message}
   </p> 
      {this.props.DiffView}
     </Accordion.Body>
  </Accordion.Item>
 
</Accordion>

        
          
          
       </div>
       
       
      ));

      return (
        <div>
        
          <div className="">
            <p className="link-warning">{commits}</p>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default CommitView;
