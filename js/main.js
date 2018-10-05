$(document).ready(()=>{
	$('#searchBar').on('keyup',(e)=>{
		let userName = e.target.value;
		$.ajax({
			url:"https://api.github.com/users/"+userName,
			data:{
				client_id:"90b4ad21313ebf2d25bd",
				client_secret:"f6b59425e86f6675941256c9f369bbc0f691107d"
			}
		}).done((user)=>{
			$.ajax({
				url:"https://api.github.com/users/"+userName+"/repos",
				data:{
					client_id:"90b4ad21313ebf2d25bd",
					client_secret:"f6b59425e86f6675941256c9f369bbc0f691107d",
					sort: 'created: asc',
					per_page: 5
				}
			}).done((repos)=>{
				$.each(repos,(index,repo)=>{
					$("#repos").append(`
						<div class="well">
							<div class="row">
								<div class="col-sm-7">
									<strong>${repo.name}</strong><br>
									${repo.description}
								</div>
								<div class="col-sm-3">
									<span class="label label-primary">Forks: ${repo.forks_count}</span>
									<span class="label label-success">Watchers: ${repo.watchers_count}</span>
									<span class="label label-info">Stars: ${repo.stargazers_count}</span>
								</div>
								<div class="col-sm-2">
									<a href="${repo.html_url}" target="_blank" class="btn btn-block btn-primary">View Repo</a>
								</div>
							</div>
						</div>
					`);
				});
			});
			$('#profile').html(`
				<div class="panel panel-info">
				  <div class="panel-heading">
				    <h3 class="panel-title">${user.name}</h3>
				  </div>
				  <div class="panel-body">
				    <div class="row">
						<div class="col-sm-3">
							<img class="thumbnail img-responsive" src="${user.avatar_url}"/>
							<a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">Visit profile</a>
				    	</div>
				    	<div class="col-sm-9">
							<span class="label label-primary">Public repos: ${user.public_repos}</span>
							<span class="label label-success">Public gists: ${user.public_gists}</span>
							<span class="label label-info">Follower: ${user.followers}</span>
							<span class="label label-warning">Following: ${user.following}</span>
							<br><br>
							<ul class="list-group">
								<li class="list-group-item list-group-item-success">Company: ${user.company}</li>
								<li class="list-group-item list-group-item-success">Blog: ${user.blog}</li>
								<li class="list-group-item list-group-item-success">Location: ${user.location}</li>
								<li class="list-group-item list-group-item-success">Email: ${user.email}</li>
								<li class="list-group-item list-group-item-success">Member since ${user.created_at}</li>
							</ul>
				    	</div>
				    </div>
				  </div>
				</div>
				<h3 class="page-header">Letest Repos</h3>
				<div id="repos">
					
				</div>
			`);
		});
	});
});