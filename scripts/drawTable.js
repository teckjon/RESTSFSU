            // Load the Visualization API and the corechart package.
            google.charts.load('current', {
                'packages': ['corechart']
            });

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);

            google.charts.setOnLoadCallback(drawd2Chart);

            google.charts.setOnLoadCallback(drawd3Chart);

            google.charts.setOnLoadCallback(drawd4Chart);

            google.charts.setOnLoadCallback(drawd5Chart);

            google.charts.setOnLoadCallback(drawd6Chart);

            google.charts.setOnLoadCallback(drawd7Chart);

            google.charts.setOnLoadCallback(drawd8Chart);

            google.charts.setOnLoadCallback(drawd9Chart);

            google.charts.setOnLoadCallback(drawd10Chart);

            google.charts.setOnLoadCallback(drawd11Chart);

            google.charts.setOnLoadCallback(TableChart);
            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            function drawChart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 4],
          ['Asian/Pacific Islander', 60],
          ['Hispanic/ Latino', 8],
          ['Multiracial/Multiethnic', 9],
          ['White', 20],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 1',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                chart.draw(data, options);
            }



            function drawd2Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 11],
          ['Asian/Pacific Islander', 24],
          ['Hispanic/ Latino', 11],
          ['Multiracial/Multiethnic', 11],
          ['White', 42],
          ['Other', 1]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 2',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d2chart_div'));
                chart.draw(data, options);
            }

            function drawd3Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 6],
          ['Asian/Pacific Islander', 77],
          ['Hispanic/ Latino', 7],
          ['Multiracial/Multiethnic', 3],
          ['White', 6],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 3',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d3chart_div'));
                chart.draw(data, options);
            }

            function drawd4Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 3],
          ['Asian/Pacific Islander', 70],
          ['Hispanic/ Latino', 7],
          ['Multiracial/Multiethnic', 7],
          ['White', 13],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 4',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d4chart_div'));
                chart.draw(data, options);
            }

            function drawd5Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 39],
          ['Asian/Pacific Islander', 17],
          ['Hispanic/ Latino', 19],
          ['Multiracial/Multiethnic', 9],
          ['White', 16],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 5',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d5chart_div'));
                chart.draw(data, options);
            }

            function drawd6Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 15],
          ['Asian/Pacific Islander', 31],
          ['Hispanic/ Latino', 35],
          ['Multiracial/Multiethnic', 6],
          ['White', 12],
          ['Other', 1]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 6',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d6chart_div'));
                chart.draw(data, options);
            }

            function drawd7Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 8],
          ['Asian/Pacific Islander', 46],
          ['Hispanic/ Latino', 16],
          ['Multiracial/Multiethnic', 9],
          ['White', 22],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 7',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d7chart_div'));
                chart.draw(data, options);
            }

            function drawd8Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 13],
          ['Asian/Pacific Islander', 12],
          ['Hispanic/ Latino', 34],
          ['Multiracial/Multiethnic', 11],
          ['White', 30],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 8',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d8chart_div'));
                chart.draw(data, options);
            }

            function drawd9Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 6],
          ['Asian/Pacific Islander', 23],
          ['Hispanic/ Latino', 58],
          ['Multiracial/Multiethnic', 5],
          ['White', 7],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 9',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d9chart_div'));
                chart.draw(data, options);
            }

            function drawd10Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 34],
          ['Asian/Pacific Islander', 29],
          ['Hispanic/ Latino', 29],
          ['Multiracial/Multiethnic', 5],
          ['White', 3],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 10',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d10chart_div'));
                chart.draw(data, options);
            }

            function drawd11Chart() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
          ['African American', 7],
          ['Asian/Pacific Islander', 48],
          ['Hispanic/ Latino', 37],
          ['Multiracial/Multiethnic', 4],
          ['White', 4],
          ['Other', 0]
        ]);

                // Set chart options
                var options = {
                    'title': 'Demographic of District 11',
                    'width': 400,
                    'height': 300,
                    'pieHole': 0.4
                };

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('d11chart_div'));
                chart.draw(data, options);
            }

