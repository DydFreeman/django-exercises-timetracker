        //window.onload = starttimer(2);
        window.starttimer = function(idt)
        {
            alert(idt);
        };
       

        $('.selecttime').change(function() 
        {
            var pippo = "";
            console.clear();
            
            
            var pippo = $('.selecttime').val();          
            var chtable=("<tbody class=\"ra\"><tr>");
            $.ajaxSetup( { "async": false } ); //Chiamata asincrona al server per il JSON
            $.getJSON('js/test3.json', pippo,function(json) {                           
                     
                        for (var i = 0, len = json.ch.length; i < len; i++) {
                        
                            var namera = json.ch[i].name;
                            console.log(namera);
                           
                                if (pippo === namera)
                                {
                                    console.log("RA " +json.ch[i].ra_list.length);
                                    for (var k = 0, lungh = json.ch[i].ra_list.length; k < lungh; k++)
                                    { 
                                        //CICLO PER AGGIUNGERE NUOVE RA
                                        var print = json.ch[i].ra_list[k];
                                      
                                        chtable +=("<td>"+print.id+"</td>");
                                        chtable +=("<td>"+print.name+"</td>");
                                        chtable +=("<td>"+print.users+"</td>");
                                        chtable +="<td class=\"timertd\"><a href=\"#\" onClick=\"showact("+k+"); return false;\"><i class=\"fa fa-plus-square\"></i></a></td>";
                                        chtable +="<td></td>";
                                        console.log("Attività " + print.activities.length);
                                        tract = "";
                                        list_act = "";
                                        count = 0;
                                        
                                        for (var j = 0, lungh_in = json.ch[i].ra_list[k].activities.length; j < lungh_in; j++)
                                        {                                       
                                          //CICLO PER AGGIUNGERE NUOVE ATTIVITA'
                                          list_act += ("<tr style=\"display:none\" class=\"tr-act"+k+"\">");
                                          list_act += "<td></td><td></td><td></td>";                                  
                                          list_act += "<td>";
                                          list_act += print.activities[j].name;                                         
                                          list_act += "</td>";
                                          list_act += "<td>" + settimer("start") + "</td>";
                                          list_act += ("</tr>");                                           
                                          count++;                                
                                        }
                                               
                                            chtable += list_act;
                                            chtable += "</tr>";
                                            $(".ra").replaceWith(chtable);
                                    }                                                             
                                }
                        }               
                        });
        });


        //----------------------------------------------//
        //--------------- LOCAL STORAGE ----------------//
        //----------------------------------------------//
        
        
        
        
        
        //**HANDLING TIMER LOCAL STORAGE
        
        
        
        
        // ----------------------------------------------- //  
        // ------------- TIMER SECTION ------------------- //
        // ----------------------------------------------- //  
        
        //**HANDLING TIMERS**  
        
        
        
        //**SETTING TIMERS**  

//         $(document).ready(
//                                function setValue()
//                                {
//                                    start_timer = "<a href=\"#\" onClick=\"starttimer(2); return false;\" class=\"btn btn-success btn-xs\">";
//                                    start_timer += "<span class=\"glyphicon glyphicon-time\"></span> Start</a>";
//
//                                    stop_timer = "<a href=\"#\" class=\"btn btn-danger btn-xs\">";
//                                    stop_timer += "<span class=\"glyphicon glyphicon-time\"></span> Stop</a>";
//
//                                    //return start_timer;
//                                    alert(start_timer);
//                                    console.log("Timer settati");
//                                },
//                                
//                                function loadStorage()
//                                {    
//                                   if (!localStorage.activities) 
//                                   {
//                                       localStorage.activities = JSON.stringify([]);
//                                   }    
//                                   var activities = JSON.parse(localStorage["activities"]);
//                                   activities.push("activity");
//                                   localStorage["activities"] = JSON.stringify(activities);
//                                   var count = JSON.parse(localStorage["activities"]).length;
//                                   alert(count);
//                                   console.log("Localstorage settato");
//                                   //window.onload(alert(loadStorage));
//                                }
//                         );
             
        // ----------------------------------------------- //  
        // ------------- END TIMER SECTION --------------- //   
        // ----------------------------------------------- //  

//try {
//   return 'localStorage' in window && window['localStorage'] !== null;
//    } catch(e){
//   return false;
//    }

