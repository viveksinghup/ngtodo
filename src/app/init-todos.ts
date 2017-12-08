export class Init{
	load(){
		if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
			console.log('No data');
			var todos = [
				{
					task: 'task list one'
				},
				{
					task: 'task list two'
				},
				{
					task: 'task list three'
				},
				{
					task: 'task list four'
				},
				{
					task: 'task list four'
				}
			];

			localStorage.setItem('todos', JSON.stringify(todos));
			return
		}
		else{
			console.log('found task');
		}
	}
}