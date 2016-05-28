import { bootstrap }    from '@angular/platform-browser-dynamic';
import {TodoStore} from './todostore';
import { TodoList } from './todolist.component';

bootstrap(TodoList, [TodoStore]);
