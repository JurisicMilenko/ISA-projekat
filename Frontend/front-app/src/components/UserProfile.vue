<template>
    <table>
      <caption>All purchases in this factory</caption>
      <!--Tabela svih kupovina, i usera (kupaca) koji su ucestvovali-->
      <tr>
        <th>Buyer</th>
        <th>Chocolate</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
      <tr v-for="purchase in purchases">
        <td>{{ purchase[0].buyer }}</td>
        <td>
          <ul>
            <li v-for="chocolate in purchase[1]">
              {{ chocolate[0].name }}, amount: {{ chocolate[1] }}
            </li>
          </ul>
        </td>
        <td>{{ purchase[0].date }}</td>
        <td>{{ purchase[0].status }}</td>
        <td>{{ purchase[0].price }}</td>
        <button v-if="purchase[0].status == 'Obrada'" @click="cancel(purchase)">Cancel</button>
      </tr>
    </table>
  </template>
  
  <script>
    import axios from 'axios';
    
    export default {
      name: 'UserProfile',
      data() {
        return {
          factory : null,
          purchases : [],
          user : null
        };
      },
      created() {
        this.fetchPurchases();
      },
      methods: {
        async fetchPurchases()
        {
          try{
            var response = await axios.get('http://localhost:8080/WebShopAppREST/rest/login/login/' + sessionStorage.getItem("User"))
  
            var factoryId = response.data.chocolateFactory
            response = await axios.get(`http://localhost:8080/WebShopAppREST/rest/login/login/`+sessionStorage.getItem("User"))
            var Uid = response.data.id
            response = await axios.get('http://localhost:8080/WebShopAppREST/rest/purchase/user/' + Uid);
            var purchasestemp = []
            purchasestemp = response.data;
            
  
    /* var keys = [];
     for(var key in purchasestemp[0]){
        keys.push(key);
     }
     alert(keys)
  */
            /*purchasestemp.forEach(async function(purchase)
                                    {
                                      response = await axios.get('http://localhost:8080/WebShopAppREST/rest/login/login/' + purchase.buyer)
                                      purchase.buyer = response.data.username;
                                      alert(response.data.username)
                                      
                                    }
                                  );
            */          
            for(let i = 0; i < purchasestemp.length;i++){
              response = await axios.get('http://localhost:8080/WebShopAppREST/rest/login/login/id/' + purchasestemp[i].buyer)
              purchasestemp[i].buyer = response.data.username
              
            }            
            var temp = []
            var chocolatestemp = []
            for(let q = 0; q < purchasestemp.length; q++){
              var chocolatestemp = []
              var found = 0
              
                    response = await axios.get(`http://localhost:8080/WebShopAppREST/rest/chocolate/`+purchasestemp[q].chocolates[0])
                    
                    if(response.data.name != undefined){
                      chocolatestemp.push([response.data,1])
                    }
                    for(let i = 1; i<purchasestemp[q].chocolates.length; i++){
                      response = await axios.get(`http://localhost:8080/WebShopAppREST/rest/chocolate/`+purchasestemp[q].chocolates[i])
                      for(let j = 0; j<chocolatestemp.length; j++){
                          if(chocolatestemp[j][0].id == response.data.id){
                            chocolatestemp[j][1]++
                            found = 1
                          }
                      }
                      if(found == 0){
                        chocolatestemp.push([response.data,1])
                      }
                      found = 0
                    }
              //alert(chocolatestemp)
              temp = [purchasestemp[q],chocolatestemp]
              
              this.purchases.push(temp)
              //alert(purchasestemp[q].id)
            }
            
            
  
            /*
            this.purchases.forEach(function(purchase)
                                    {
                                      purchase.chocolates.forEach(
                                        function(chocolate)
                                        {
  
                                        }
                                      )
                                    }
                                  );
            */
          }catch(error){
            alert(error)
          }finally{
  
          }
        },
        async fetchUser(userId)
        {
          try{
            const response = await axios.get('http://localhost:8080/WebShopAppREST/rest/login/login/' + userId);
            this.user = response.data;
          }catch(error){
  
          }finally{
            
          }
        },
        async cancel(purchase)
      {
        purchase[0].chocolate
        var ch
        for(let i = 0; i < purchase[0].chocolates.length;i++){
            var response = await axios.get(`http://localhost:8080/WebShopAppREST/rest/chocolate/` + purchase[0].chocolates[i]);            
            ch = response.data
            ch.amount++
            response = await axios.put(`http://localhost:8080/WebShopAppREST/rest/chocolate/` + purchase[0].chocolates[i] , ch);
        }
         
         response = await axios.delete(`http://localhost:8080/WebShopAppREST/rest/purchase/`+purchase[0].id)

      }
      },
    };
    </script>