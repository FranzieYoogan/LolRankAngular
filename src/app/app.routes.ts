import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AgentComponent } from './agent/agent.component';

export const routes: Routes = [

    { path: '', component: SearchComponent },
    { path: 'agent', component: AgentComponent },

];
