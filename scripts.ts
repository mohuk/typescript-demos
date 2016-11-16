const heroes: Array<any> = [
	{
        name: 'Bruce Wayne',
        description: 'CEO of Wayne Enterprises, Bruce is a vigilante at night protecting the streets of Gotham'
    },
    {
        name: 'Dick Grayson',
        description: 'Sidekick role suits him as he wanders the night with the Dark Knight'
    },
    {
        name: 'The Joker',
        description: 'Lunatic, only lives to kill the batman, but often he choses not to'
    }
];

let heroesHTML = heroes.reduce((acc, hero) => {
	return acc + `
		<li class="mdl-list__item mdl-list__item--three-line">
			<span class="mdl-list__item-primary-content">
			<i class="material-icons  mdl-list__item-avatar">person</i>
			<span>${hero.name}</span>
			<span class="mdl-list__item-text-body">
				${hero.description}
			</span>
			</span>
			<span class="mdl-list__item-secondary-content">
				<a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
			</span>
		</li>
	`;
}, '');
document.querySelector('.mdl-list').innerHTML = heroesHTML;
