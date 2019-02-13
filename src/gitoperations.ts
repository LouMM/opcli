import simplegit from 'simple-git/promise';

const git = simplegit();

export class GitProxy {
    static async clone(repo: string,path:string, branch?: string): Promise<string> {
        return git.clone(repo, path, ['--branch', branch || 'master']);
    }       
}