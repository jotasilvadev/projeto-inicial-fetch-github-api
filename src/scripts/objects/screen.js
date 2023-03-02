const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
        <div class="data">
            <h1>${user.name ?? "Não possui nome cadastrado 😒"}</h1>
            <p>${user.bio ?? "Não possui bio cadastrada 🤨"}</p>
            <hr>
            <div class="info__follows">     
                <i class="fa-solid fa-users"></i>                
                <p>Seguidores: ${user.followers}</p>                
                <p>Seguindo: ${user.following}</p>
            </div>
        </div>        
        </div>`;
        

        let repositoriesItens = "";
        user.repositories.forEach(
            (repo) =>
                (repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                <ul class="repo__icons">
                <li><i class="fa-solid fa-code-fork"> </i>${repo.forks}</li>|
                <li><i class="fa-solid fa-eye"></i>${repo.watchers}</li>|
                <li><i class="fa-solid fa-star"></i>${repo.stargazers_count}</li>|
                <li><i class="fa-solid fa-laptop-code"></i>${repo.language}</li>
                </ul>                
                </a>
                </li>`)
        );    

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`;
        }

        let eventsItens = "";
        user.events.forEach(
            (events) =>
                (eventsItens += `<li><a href="${events.repo.html_url}" target="_blank">${events.type} em ${events.repo.name}</a></li>`)
        );

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Eventos</h2>
            <ul>${eventsItens}</ul>
            </div>`;
        }


    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    },
};

export { screen };
