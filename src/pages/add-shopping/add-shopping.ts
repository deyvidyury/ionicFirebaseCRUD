import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularFire2/database';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

	shoppingItem = {} as ShoppingItem;
	shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  	this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  addShoppingItem(shoppingItem: ShoppingItem){
  	this.shoppingItemRef$.push({
  		itemName: this.shoppingItem.itemName,
  		itemNumber: Number(this.shoppingItem.itemNumber)
  	});

  	this.shoppingItem = {} as ShoppingItem;

  	// Navigate the user back to shpping list page
  	this.navCtrl.pop();
  }

}
