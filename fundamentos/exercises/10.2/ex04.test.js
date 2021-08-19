const getRepos = require('./ex04');


it('Check if getRepos function fetches the right repository', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  
  return getRepos(url).then((response) => {
    expect(response).toContain('sd-01-week4-5-project-todo-list');
    expect(response).toContain('sd-01-week4-5-project-meme-generator');
  });
})