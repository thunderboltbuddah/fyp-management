import React, { useState } from 'react';
import Search from './Search';
import CommitView from './CommitView';
import DiffView from './DiffView';
import { parseDiff, Diff, Hunk, Decoration } from 'react-diff-view';

const MainView = () => {
  const [org, setOrg] = useState('');
  const [repoName, setRepoName] = useState('');
  const [commitSha, setCommitSha] = useState('');

  const handleSearch = (searchText, repoText) => {
    if (searchText !== org) {
      setOrg(searchText);
      setRepoName(repoText);
      setCommitSha('');
    }
  };

  const handleCommitViewUpdate = (repoName) => {
    setOrg(org);
    setRepoName(repoName);
    setCommitSha('');
  };

  const handleDiffViewUpdate = (sha) => {
    setOrg(org);
    setRepoName(repoName);
    setCommitSha(sha);

    // Open DiffView in a new tab if sha is not empty
   
    
  };

  return (
    <div>
       <h4>Commits</h4>
      <Search handleSearch={handleSearch} />
      <div className='card'>
       
        <CommitView org={org} repoName={repoName} updateDiffView={handleDiffViewUpdate} DiffView={    <DiffView org={org} repoName={repoName} commitSha={commitSha} />} />
    
        
     
      </div>
    </div>
  );
};

export default MainView;
