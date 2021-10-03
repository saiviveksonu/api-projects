class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // method to show the profile of the user
    showprofile(user) {
        // user=profile    
        this.profile.innerHTML = `<div class="card card-body mb-3>
<div class="row">
<div class="col-md-3">
<img class="img-fluid mb-2" src="${user.avatar_url}">
<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">view profile</a>
</div>
<div class="col-md-9">
<span class="badge badge-primary">public Repos:${user.public_repos}</span>
<span class="badge badge-secondary">public Repos:${user.public_gists}</span>
<span class="badge badge-success">public Repos:${user.public_followers}</span>
<span class="badge badge-info">public Repos:${user.public_following}</span>
<br><br>
<ul class="list-group">
<li class="list-group-item">company:${user.company}<li>
<li class="list-group-item">website/blog:${user.blog}<li>
<li class="list-group-item">location:${user.location}<li>
<li class="list-group-item">member since:${user.created_at}<li>
</div>
</div>
</div>
<h3 class="page-heading mb-3">latest repos</h3>
<div id="repos"></div>`
    }
    //method to show  the repositories of the user
    showRepos(repos){
        let output='';
        // repos are array consisting of objects we have to loop through each object
        repos.forEach(function(repo){
            output +=`
            <div class="card card-body mb-2>
            <div class="row">
            <div class="col-md-6">
           <a href="${repo.html_url}" target="_blank">${repo.name}</a>
           </div>
           <div class="col-md-6">
           <span class="badge badge-primary">stars:${repo.stargazers_count}</span>
<span class="badge badge-secondary">watchers:${repo.watchers_count}</span>
<span class="badge badge-success">forms:${repo.forms_count}</span>
            </div>
            </div>
            </div>"`;
        });
        // output repos
        document.getElementById('repos').innerHTML =output;
    }
    // show alert function
    one(message, className){
        // create div 
        const div = document.createElement('div');
        console.log(div);
        // add classes
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent to show alert before that parent
        const container1 = document.querySelector('.searchContainer');
        // get search box
        const search1 = document.querySelector('.search');
        // insert the alert
        container1.insertBefore(div, search1);
    }
    //method for clearing the profile 
    clearProfile() {
        this.profile.innerHTML = '';
    }
}