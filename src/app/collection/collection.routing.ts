import {Routes} from '@angular/router';
import {CollectionComponent} from './collection.component';
import {UserResolver} from './user.resolver';


export const CollectionRoutes: Routes = [
  {
    path: '',
    component: CollectionComponent,
    data: {title: 'Manage Employees', hasPermission: {id: 'office_employees', accessLevel: 'READ'}}
  },
  
];
