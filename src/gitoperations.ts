import simplegit from 'simple-git/promise';

const git = simplegit();

/**
 * @todo Secure Token Consideration for ...git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf git@github.com: GITHUB_TOKEN may be setup as environmnet variable or pasted directly and then I install private github repos like: npm install user/repo --save
 */
export class GitProxy {
    static async clone(repo: string,path:string, branch?: string): Promise<string> {
        
        return git.clone(repo, path, ['--branch', branch || 'master']);
    }       
}