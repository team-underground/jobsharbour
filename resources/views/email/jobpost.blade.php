<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
		.flex {
			display: flex;
		}

		tr {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}


		th,
		td {
			width: 50%;
		}

		.justify-between {
			justify-content: space-between;
		}
	</style>
</head>

<body>
	Dear, {{$userName}}
	new Job arrived
	<p style="margin-bottom: 30px;">Job description</p>
	<table border="1">
		<tr>
			<th>Job title</th>
			<td>{{$job_title}}</td>
		</tr>
		<tr>
			<th>Job location</th>
			<td>{{$job_location}}</td>
		</tr>
		<tr>
			<th>Job Position</th>
			<td>{{$job_position}}</td>
		</tr>
		<tr>
			<th>Job Type</th>
			<td>{{$job_type}}</td>
		</tr>
	</table>

	<p style="text-align: left">Regards,</p>
	<p style="text-align: left;font-weight: 600; ">
		Job Harbour team
	</p>
</body>

</html>