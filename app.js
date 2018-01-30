var calculator = prompt("Which calculator will you like?: (a)Basic (b)Advanced (c)BMI");

  switch(calculator){

              case 'a': var x = parseInt(prompt('Enter a Value: ', '0'));
                        var y = parseInt(prompt('Enter a Value: ', '0'));

                        var num1 = parseInt(x);
                        var num2 = parseInt(y);


                        var calculator = prompt("What would will you like to do with the numbers?: (+)Add (-)Subtract (*)multiplication (/)division");

                        switch(calculator){

                          case '+': alert(num1 + num2);
                          break;
                          case '-': alert(num1 - num2);
                          break;
                          case '*': alert(num1 * num2);
                          break;
                          case '/': alert(num1 / num2);
                          break;

                          default: alert("What Happened?");

                        }
               break;

               case 'b': var calculator = prompt("What would will you like to do with the numbers?:  (pow)Power (rt)Square Root");

                         switch(calculator){

                           case 'rt': var x = parseInt(prompt('Enter a Value: ', '0'));
                                      var num1 = Math.sqrt(x);
                                      alert(num1);
                           break;
                           case 'pow': var y = parseInt(prompt('Enter a Value: ', '0'));
                                       var z = parseInt(prompt('Enter a Value: ', '0'));
                                       var power = Math.pow(y,z);
                                       alert(power);
                           break;

                           default: alert("What Happened?");

                         }
               break;

               case 'c': var kg = parseInt(prompt('Enter your weight in Kg: ', '0'));

                         var height = parseFloat(prompt('Enter height in metres: ','0'));
                         var heightSquared = Math.pow(height,2);
                         alert(kg / heightSquared);
               break;

               default: alert("What Happened?");

                    }
