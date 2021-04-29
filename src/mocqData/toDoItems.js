export default function toDoMoqArray() { 
    const resp = fetch("https://raw.githubusercontent.com/Osttik/AmpliContactsListLesson/MoqData/ToDoList.json")
    console.log(resp)
    const array = resp.json();
    return array
}