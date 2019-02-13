import simplegit from 'simple-git/promise';
const git = simplegit();

export class GitProxy {
    async clone(repo: string,path:string, branch?: string) {
        return git.clone(repo, path, ['--branch', branch || 'master']);
    }    
}