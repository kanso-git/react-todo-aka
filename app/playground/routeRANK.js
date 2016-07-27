/*

A traveller searches for trips
from Bern to Berlin on Dec 25, 2013,
from 8am (one-way).

A list of the 20 first results returned by routeRANK tool is given in the attached ex3-data.json file.
*/

var trip ={
      "boo_return":false, /* is true for a return trip, false otherwise*/
      "co2_kg":247.81,
      "price_eur":192.0,
      "workTime_sec":0, /*is the duration that the traveler can work during that part of the trip in seconds.*/
      "duration_out_sec":35199.0, /* Berne-Berlin trip duration in sec */
      "desc":"Berne-Berlin via Car dep 2013-12-25 08:00:00 +0100, arr 2013-12-25 17:46:39 +0100 | \n\r",
      "id":"df46506c2f5d631d19d263d83685276261376ab8"
   }

  /*

   duration_out_sec is the duration of the corresponding outbound part of the trip, in seconds.
   For return trip, if applicable, there will be a similar field duration_in_sec for the duration of the inbound trip part.


    outbound is the part from Bern -> Berlin
    inbound is the part from Berlin -> Bern

   */
