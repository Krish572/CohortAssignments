function totalSpent(entries){

    const categories = new Map();

    for(let i = 0; i < entries.length; i++){
        if(categories.has(entries[i].category)){
            categories.set(entries[i].category, categories.get(entries[i].category) + entries[i].price);
        }else{
            categories.set(entries[i].category, entries[i].price);
        }
    }

    const res = [];

    for(let [key, value] of categories){
        res.push({"category" : key,
            "totalspent" : value
        })
    }

    console.log(res);
}



const entries = [
  { 
    id: 1,
    timestamp: 1656076800000, 
    price: 10, 
    category: 'Food', 
    itemName: 'Pizza',
  },
  { 
    id: 2,
    timestamp: 1656163200000, 
    price: 50, 
    category: 'Transport', 
    itemName: 'Taxi Ride',
  },
  { 
    id: 3,
    timestamp: 1656249600000,
    price: 100, 
    category: 'Shopping',
    itemName: 'T-shirt',
  },
  { 
    id: 4,
    timestamp: 1656336000000, 
    price: 250, 
    category: 'Bills', 
    itemName: 'Headphones',
  },
  { 
    id: 5,
    timestamp: 1656422400000, 
    price: 200, 
    category: 'Bills', 
    itemName: 'Mobile Recharge',
  },
  { 
    id: 6,
    timestamp: 1656508800000, 
    price: 20, 
    category: 'Entertainment', 
    itemName: 'Movie Ticket',
  }
]

totalSpent(entries);


