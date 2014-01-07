	var t = 0;

	function starttimer(idt)
	{
		alert(idt);
	}

	//**SETTING TIMERS**

	function settimer(type)
	{
		if (type === "start")
		{
			set = "success";
			name = "Start timer";
		}
		else
		{
			set = "danger";
			name = "Stop timer";
		}

		timer = "<span class=\"pippo\"><a href=\"#\" data-event=\"click\" data-handler=\"click\" class=\"btn btn-"+set+" btn-xs\">";
		timer += "<i class=\"glyphicon glyphicon-time\"></i> "+name+"</a></span>";
		timer += "<span class=\"timer label label-info\"></span>";

		

		return timer;
	}

	//**end -- **SETTING TIMERS**


	//** HANDLING TIMERS //

	$("body").on('click',".btn.btn-success.btn-xs",function(){
	   		var myVar = setInterval(function(){myTimer()},1000);
	});

	   function myTimer()
	   {
	   				$('.pippo').html(settimer("danger"));
	   				t = t + 1;
	   				$('.timer').html(t);
	   				//$('.btn.btn-success.btn-xs').addClass('btn-danger').removeClass('btn-success');
	   }

	//** end --- HANDLING TIMER //


	function showact(ID){
        $(".tr-act"+ID).animate({"height": "toggle"}, { duration: 300 });
        }   

      //**LOADING JSON**  
                $(document).ready(function()
                    {
                        $.getJSON('js/test_1.json', function(json) {                           
                                $.each(json,function(key,val)
                                {
                                    var chname=("<option value="+val.name+">"+val.name+"</option>");
                   					$(".selecttime").append(chname);
                                });                             
                        });
                    });
         

	//** NEW PARSING FUNCTION

		goal_prev = "";

	//** PARSING JSON **//

	   	$('.selecttime').change(function() 
        {
            var ch = $('.selecttime').val();      
            var chtable=("<tbody class=\"ra\"><tr>");
            list_act = "";
            k= "";
            equal = false;
            $.ajaxSetup( { "async": false } ); //Chiamata asincrona al server per il JSON
            $.getJSON('js/test_1.json', ch,function(json) {                           
   
                        for (var i = 0, len = json.length; i < len; i++) {
                        	name = json[i].name;	
                        	if (name === ch)
                        	{
                        		goal_new = json[i].goal;
                        		//console.log(goal_new);
                        		//console.log("INDICE: " + i + " GOAL_PREV: " + goal_prev);
                        		if (goal_new != goal_prev)
                        		{
                        			//console.log("DIVERSO!");
                        			goal_prev = json[i].goal;
                        			equal = false;
                        		}
                        		else
                        		{
                        			//console.log("CAZZ, è uguale");
                        			equal = true;
                        		}

                        		
                        		if (equal === false)
                        		{
                        			chtable +="<tr>";
	                        		chtable +=("<td>"+json[i].id+"</td>");
	                            	chtable +=("<td>"+json[i].goal+"</td>");
	                            	chtable +=("<td></td>");
	                            	chtable +="<td class=\"timertd\"><a href=\"#\" onClick=\"showact("+i+"); return false;\"><i class=\"fa fa-plus-square\"></i></a></td>";
	                            	chtable +="<td></td>";

	                            	list_act = "";
	                            	for (var k = 0, l = json.length; k < l; k++) {
	                            	//CICLO PER AGGIUNGERE NUOVE ATTIVITA'
	                            		if (json[k].goal === json[i].goal)
	                            		{
	                            			list_act += ("<tr style=\"display:none\" class=\"tr-act"+i+"\">");
			                                list_act += "<td></td><td></td><td></td>";                                  
			                                list_act += "<td>";
			                                list_act += json[k].activity;                                         
								            list_act += "</td>";
						                    list_act += "<td>" + settimer("start") + "</td>";
			                                list_act += ("</tr>");
	                            		}
		                            	
	                                }

	                                chtable += list_act;
	                            	chtable += "</tr>";
	                            	$(".ra").replaceWith(chtable);   
                        		}



	                        	
                        	}
                      }  	
	 			});
});
                        
                            // var namera = json.ch[i].name;
                            // console.log(namera);
                           
                            //     if (pippo === namera)
                            //     {
                            //         console.log("RA " +json.ch[i].ra_list.length);
                            //         for (var k = 0, lungh = json.ch[i].ra_list.length; k < lungh; k++)
                            //         { 
                            //             //CICLO PER AGGIUNGERE NUOVE RA
                            //             var print = json.ch[i].ra_list[k];
                                      
                            //             chtable +=("<td>"+print.id+"</td>");
                            //             chtable +=("<td>"+print.name+"</td>");
                            //             chtable +=("<td>"+print.users+"</td>");
                            //             chtable +="<td class=\"timertd\"><a href=\"#\" onClick=\"showact("+k+"); return false;\"><i class=\"fa fa-plus-square\"></i></a></td>";
                            //             chtable +="<td></td>";
                            //             console.log("Attività " + print.activities.length);
                            //             tract = "";
                            //             list_act = "";
                            //             count = 0;
                                        
                            //             for (var j = 0, lungh_in = json.ch[i].ra_list[k].activities.length; j < lungh_in; j++)
                            //             {                                       
                            //               //CICLO PER AGGIUNGERE NUOVE ATTIVITA'
                            //               list_act += ("<tr style=\"display:none\" class=\"tr-act"+k+"\">");
                            //               list_act += "<td></td><td></td><td></td>";                                  
                            //               list_act += "<td>";
                            //               list_act += print.activities[j].name;                                         
                            //               list_act += "</td>";
                            //               list_act += "<td>" + settimer("start") + "</td>";
                            //               list_act += ("</tr>");                                           
                            //               count++;                                
                            //             }
                                               
                            //                 chtable += list_act;
                            //                 chtable += "</tr>";
                            //                 $(".ra").replaceWith(chtable);
                            //         }                                                             
                            //     }
                                  
                       
       

		//end -- ** PARSING JSON **//
	

	 
