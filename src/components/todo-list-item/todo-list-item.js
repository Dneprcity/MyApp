import { Component } from 'react';
import './todo-list-item.css';
// import IconButton from '@mui/material/IconButton';
import { Button, Grid } from '@mui/material';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import DeleteIcon from '@material-ui/icons/Delete';
import { ContactSupportOutlined, FlashAutoRounded } from '@material-ui/icons';
import { ClassNames } from '@emotion/react';

class TodoListItem extends Component {
    constructor() {
        super();

        this.state = {
            done: false,
            important: false,
        };
    }

    onLabelClick = () => {
        this.setState({
            done: !this.state.done,
        });
        console.log(`Done: ${this.props.label}`);
    };

    onMarkImportant = () => {
        this.setState({
            important: true,
        });
    };

    onPriorityHighClick = () => {
        console.log('click on !');
    };

    onDeleteClick = () => {
        console.log('click on delete');
    };

    onDrinkCoffeeClick = () => {
        console.log('click on Drink Coffee');
    };

    onBuildAwesomeAppClick = () => {
        console.log('click on Build Awesome App');
    };

    onHaveALunchClick = () => {
        console.log('click on Have a lunch');
    };

    render() {
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += 'important';
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <Grid
                className={ClassNames}
                container
                classNames='todo-list-item'
                justifyContent='space-between'
                alignItems='center'
            >
                <Grid
                    item
                    className='todo-list-item-label'
                    style={style}
                    onClick={this.onLabelClick}
                >
                    {label}
                </Grid>

                <Grid item>
                    <Button
                        onClick={this.onPriorityHighClick}
                        //onClick={this.onMarkImportant}
                        color='success'
                        variant='outlined'
                    >
                        <PriorityHighIcon />
                    </Button>
                    <Button
                        onClick={this.onDeleteClick}
                        color='error'
                        variant='outlined'
                    >
                        <DeleteIcon />
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

// const TodoListItemFunc = ({ label, important = false }) => {
//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal',
//     };

//     return (
//         <span className='todo-list-item'>
//             <span
//                 className='todo-list-item-label'
//                 style={style}
//                 onClick={this.onLabelClick}
//             >
//                 {label}
//             </span>

//             <button
//                 type='button'
//                 className='btn btn-outline-success btn-sm float-right'
//             >
//                 <i className='fa fa-exclamation' />
//             </button>

//             <button
//                 type='button'
//                 className='btn btn-outline-danger btn-sm float-right'
//             >
//                 <i className='fa fa-trash-o' />
//             </button>
//         </span>
//     );
// };

export default TodoListItem;
