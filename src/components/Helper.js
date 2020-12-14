export const checkBudget = (budg, remain) => {
    let cssClass;

    if( (budg/4) > remain){
        cssClass='alert alert-danger';
    } else if( (budg/2) ){
        cssClass='alert alert-warning';
    } else {
        cssClass='alert alert-success'
    }

    return cssClass;
}