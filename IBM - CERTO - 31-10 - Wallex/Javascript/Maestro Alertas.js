const btns=[
    {
        id: 1,
        name: 'Atividades em breve'
    },
    {
        id: 2,
        name: 'Atividades não feitas'
    },
    {
        id: 3,
        name: 'Atividades feitas'
    },
    {
        id: 4,
        name: 'Atividades vencidas'
    },
    ]
    
    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
    }).join('');
    
    const atividade = [
    {
        id: 2,
        title: 'Aulas de instrumentos',
        price: 120,
        category: 'Watches'
    },
    {
        id: 4,
        title: 'Prática em conjunto',
        price: 200,
        category: 'Laptop'
    },
    {
        id: 4,
        title: 'Teoria musical e percepção',
        price: 100,
        category: 'Laptop'
    },
    {
        id: 2,
        title: 'História da música',
        price: 350,
        category: 'Watches'
    },
    {
        id: 2,
        title: 'Produção musical e tecnologia',
        price: 130,
        category: 'Watches'
    },
    {
        id: 2,
        title: 'Aulas de composição e arranjo',
        price: 130,
        category: 'Watches'
    },
    {
        id: 4,
        title: 'Improvisação',
        price: 85,
        category: 'Laptop'
    },
    ];
    
    const categories = [...new Set(atividade.map((item)=>
        {return item}))]
    
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        displayItem(flterCategories)
    }
    
    
    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image, title, price} = item;
            return(
                `<div class='box'>
                <h3>${title}</h3>
                <div class='bottom'>
                <h2>$ ${price}.00</h2>
                </div>
                </div>`)
        }).join('');
    }
    displayItem(categories);