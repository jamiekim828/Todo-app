const listTitle = document.getElementById("list_title");
const listDate = document.getElementById("list_date");
const listStatus = document.getElementById("list_status")

const notStarted = document.getElementById("not_started");
const inProgress = document.getElementById("in_progress");
const done = document.getElementById("done");
const lists = document.getElementById("lists");
const addButton = document.getElementById("addBtn");

notStarted.innerText = "Not started";
inProgress.innerText = "In progress";
done.innerText = "Done";

const addList = () => {
   
    const eachList = document.getElementsByTagName('li')
    const a = [...eachList]

    if(!listTitle.value) {
        alert("Please type the to do title")
    } else if(!listDate.value) {
        alert("Please choose the date")
    } else if(!listStatus.value) {
        alert("How is the status?")
    } else {
        const todolist = document.createElement('li')
        const li = lists.appendChild(todolist)
        li.innerHTML= `<span>Title: ${listTitle.value}</span> <span>Date: ${listDate.value}</span>`
        li.classList.add(`${listStatus.value}`)
        li.setAttribute("id", `${listTitle.value}`)
        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("class", "deleteBtn")
        deleteButton.appendChild(document.createTextNode("Delete"))
        li.appendChild(deleteButton)

        const listItems = document.getElementsByClassName("deleteBtn")
        console.log('lists',listItems)
        const left = document.getElementById("done_number")
        const doneItems = document.getElementsByClassName("done");
        
        for(let i=0; i<listItems.length; i++) {
            const removeItem = () => {
                listItems[i].parentNode.remove();
                console.log('keys', Object.keys(listItems))
                const newlistItems = Object.values(listItems)
                .map(el => 
                    Object.keys(listItems).indexOf(el) > i ? listItems.splice(i-1, 0, el) : el)
                console.log('new',newlistItems)
                return newlistItems
            }
            if(listItems[i]) {
                left.innerHTML = `${doneItems.length} item(s) done out of ${listItems.length}`
                listItems[i].onclick = removeItem
                
            } else {
                left.innerHTML = `${doneItems.length} item(s) done out of ${newlistItems.length}`
                newlistItems[i].onclick = removeItem
                
            }
        }
    } 

    listTitle.value = ''
    listDate.value = ''
    listStatus.value =''
};

addButton.onclick = addList;


window.onload = function() {
    const colorDescription1 = document.getElementById("description1")
    const colorDescription2 = document.getElementById("description2")
    const colorDescription3 = document.getElementById("description3")

    const span = document.createElement("div")
    const p1 = document.createElement("p")
    const text1 = document.createTextNode("Not started")
    p1.appendChild(text1)


    const span2 = document.createElement("div")
    const p2 = document.createElement("p")
    const text2 = document.createTextNode("In progress")
    p2.appendChild(text2)

    const span3 = document.createElement("div")
    const p3 = document.createElement("p")
    const text3 = document.createTextNode("Done")
    p3.appendChild(text3)
    
    colorDescription1.append(span, p1)
    colorDescription2.append(span2, p2)
    colorDescription3.append(span3, p3)
}