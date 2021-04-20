
        //API요청 URL 변수
        var url='http://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=014f9cb5bedc61da0e1ab39cdcce87a6';
        $.getJSON(url, function(data){
            //날짜 데이터 객체
            // var date1= new Date();
            // var day = String(date1.getDay());
            // var date = date1.getDate();
            // var nowMon = String(date1.getMonth()+1);
            // var month = new Array('JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC');
            // var NowToday = month[date1.getMonth()]+"　"+date+'th'];
           
         
            
            // // nowDay = String(Now.getDate());
                    
      
            var  Now = new Date(),
            StrNow = String(Now),
            nowYear = String(Now.getFullYear()),
            nowMon = String(Now.getMonth()+1),
            nowDay = String(Now.getDate());
        var week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT');              
        var month = new Array('JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC');
        var NowToday = month[Now.getMonth()]+"　"+nowDay+'th'+"　"+week[Now.getDay()];
        

            
            
            //날씨데이터 객체
            var sys = data.sys; 
            var city = data.name;
            var weather = data.weather;
            var main = data.main;

            var wmain = weather[0].main;
            var w_id = weather[0].id;
            var icon = weather[0].icon;

            var country = sys.country;
            var temp =  main.temp;
            var temp_min = main.temp_min;
            var temp_max = main.temp_max;
            var icon_url = 'images/'+ icon;

            //날짜 정보 표시
            $('#weather_info>.day').html(NowToday);
            // 날씨 정보 표시
            $('#weather_info>.city').html(city);
            $('#weather_info .icon').html("<img src='" + icon_url + ".png'>");
            $('#weather_info .w_id').html(wmain);
            $('#weather_info .tem_min').html(parseInt(temp_min-273.15)+'&deg;'+'min');
            $('#weather_info .tem_max').html(parseInt(temp_max-273.15)+'&deg;'+'max');
            $('#weather_info .temp').html('온도'+'&nbsp'+ '&nbsp'+'&nbsp'+ parseInt(temp-273.15)+'&deg;');
            $('#bg').html("<img src='images/"
            +icon+"bg.png'>");
         

            if(icon==='01d' || icon==='01n'){
                $('#text').html('화창한 날씨 :)');
            }

        });