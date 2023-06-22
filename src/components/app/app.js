import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Build Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ];

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                    <AppHeader toDo={todoData.length} done={0} />
                    <div className='d-flex justify-content-between mb-3'>
                        <SearchPanel />
                        <ItemStatusFilter />
                    </div>
                    <TodoList todos={todoData} />
                </div>
            </div>
        </div>
    );
};

export default App;
