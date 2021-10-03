class Github {
    constructor() {
        this.client_id = '5e8d848e354e07f5f23f';
        this.client_secret = 'ce7435e19736e48c3437b96958bb9c672d32b5bd';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }
    // to make a http request it return a promises wheter the request is sucess or not
    async getUser(user) {
        // profile response returns the object of user and his information
        const profileresponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_sceret=${this.client_secret}`);
        // reporesponse returns the object of user repos and his information
        const reporesponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_sceret=${this.client_secret}`);
       
        // the response from the http request is stored in the variable profile as a object
        const profile = await profileresponse.json();
         // the response from the http request is stored in the variable repos as a object
        const repos = await reporesponse.json();
        // we are returning the profile and the repos of the github user
        return {
            profile,
            repos
        }
    }
}