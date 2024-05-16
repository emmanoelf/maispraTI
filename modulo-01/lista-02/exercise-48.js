const store_inventory_a = { baralho: 1, pelucia: 3, cobertor: 3 };
const store_inventory_b = { racao: 4, vela: 11, cachaca: 51, baralho: 5, cobertor: 14 };

function mergeStores(store_inventory_a, store_inventory_b){
    const merged_store = {...store_inventory_a};
    for(const key in store_inventory_b){
        if(merged_store[key]){
            merged_store[key] += store_inventory_b[key];
        }else{
            merged_store[key] = store_inventory_b[key];
        }
    }
    return merged_store;
}


function main(){
    console.log(mergeStores(store_inventory_a, store_inventory_b));
}

main();