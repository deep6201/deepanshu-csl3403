let person = [
    {
        'firstName': 'Deepanshu',
        'lastName': 'Tibrewal',
        'Office-Address': 'Dhaka'
    },
    {
        'firstName': 'Anuj',
        'lastName': 'Singh',
        'Office-Address': 'Patna,Bihar'
    },
    {
        'firstName': 'Ramesh',
        'lastName': 'Kumar',
        'Office-Address': 'Canada'
    }
]
for(let i=0;i<person.length;i++){
    let val=person[i];
    console.log(i+1);
for (let key in val) {
    console.log("--"+key + " " + val[key]);
}

}