Meteor.startup(function(){
    var users = Meteor.users.find().count();
    if(!users) {
        for(var i = 0; i < 100; i++){
            HTTP.get("http://api.randomuser.me/", function(err,res){
                var fields = res.data.results[0].user;
                delete fields['password'];
                delete fields['salt'];
                delete fields['md5'];
                delete fields['sha1'];
                delete fields['sha256'];
                delete fields['registered'];
                delete fields['dob'];
                delete fields['HETU'];
                delete fields['INSEE'];
                delete fields['phone'];
                delete fields['cell']
                delete fields['version'];
                var user = {
                    username: fields.username,
                    email: fields.email,
                    password:"password",
                    profile: fields
                }
                Accounts.createUser(user);
            })
        }
    }


})
