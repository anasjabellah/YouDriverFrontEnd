import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ShowOfferComponent } from './offres/components/show-offer/show-offer.component';
import { OfferContainerComponent } from './offres/components/offer-container/offer-container.component';
import { AddOfferComponent } from './offres/components/add-offer/add-offer.component';
import { UpdateOfferComponent } from './offres/components/update-offer/update-offer.component';
import { ListsOffersComponent } from './offres/components/lists-offers/lists-offers.component';
import { VehiculeContainerComponent } from './vehicules/components/vehicule-container/vehicule-container.component';
import { ListVehiculesComponent } from './vehicules/components/list-vehicules/list-vehicules.component';
import { AddVehiculesComponent } from './vehicules/components/add-vehicules/add-vehicules.component';
import { ShowVehiculesComponent } from './vehicules/components/show-vehicules/show-vehicules.component';
import { UpdateVehiculesComponent } from './vehicules/components/update-vehicules/update-vehicules.component';


const routes: Routes = [

  { path: 'offer' , component: OfferContainerComponent , 
  children:[
    {path: '' , component: ListsOffersComponent },
    {path: 'add' , component: AddOfferComponent  },
    {path: 'show/:id' , component: ShowOfferComponent  },
    {path: 'update/:id' , component: UpdateOfferComponent  }
    ]  
  },
  {
    path: 'vehicule' , component: VehiculeContainerComponent ,
    children:[
      {path: '' , component: ListVehiculesComponent},
      {path: 'add' , component: AddVehiculesComponent},
      {path: 'show/:id' , component: ShowVehiculesComponent},
      {path: 'update/:id' , component: UpdateVehiculesComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
