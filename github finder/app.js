// search input
// Github class has been intiated over here.......it gives two objects profile and repos
const github=new Github;
// ui class is initiated over here
const ui=new UI;

// adding a event listner to seaarch the user to input field
const searchuser=document.getElementById("searchUser").addEventListener('keyup',(e)=>{

    const usertext=e.target.value;
    // checking whether anything entered in the input field
    if(usertext !=''){
        // make http call
        github.getUser(usertext)
        // if we get any response from the call then get the profile and the repos object
        // data={profile,repos}
        .then(data=>{

            //  console.log("in app js"+data.profile);
            // if the profile.message dosen't have user then show alert

            if(data.profile.message ==='Not Found'){
             ui.one("user not found","alert alert-danger");
            }
            
            // user found then show profile and the repos of the user

            else{
                // show profile
                ui.showprofile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        // clear profile
        ui.clearProfile();
    }
});