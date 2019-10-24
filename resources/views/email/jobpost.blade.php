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

		table {
			border-collapse: collapse;
		}

		th {
			background: #ccc;
		}

		th,
		td {
			border: 1px solid #ccc;
			padding: 8px;
		}

		tr:nth-child(even) {
			background: #efefef;
		}

		.justify-between {
			justify-content: space-between;
		}
	</style>
</head>

<body>
	<p>Dear Administrator,</p>

	<p>New Job Post added by <strong>{{ $userName }}</strong>.</p>

	<p style="margin-bottom: 30px;">Job description</p>
	<table>
		<tr>
			<th>Job title</th>
			<td>{{ $job_title }}</td>
		</tr>
		<tr>
			<th>Job location</th>
			<td>{{ $job_location }}</td>
		</tr>
		<tr>
			<th>Job Position</th>
			<td>{{ $job_position }}</td>
		</tr>
		<tr>
			<th>Job Type</th>
			<td>{{ $job_type }}</td>
		</tr>
	</table>

	<p>Regards,</p>
	<strong>Job Harbour's Team</strong>
</body>

</html>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
	<title>Job Post Created</title>
</head>

<body>
	<table width="100%">
		<tr>
			<td class="esd-stripe" align="center">
				<table width="700" cellspacing="0" cellpadding="0" style="background-color: #edf2f7; padding: 22px;">
					<tr>
						<td class="esd-stripe" align="left">
							<table>
								<tr>
									<td class="esd-stripe" esd-custom-block-id="7799" align="left">
										<table class="es-header-body" width="700" cellspacing="0" cellpadding="0">
											<tbody>
												<tr>
													<td class="esd-block-text es-m-txt-c" align="left">
														<img src="url('jh-logo.png')" alt="jh-logo">
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</table>
							<table style="background-color: #ffffff; padding: 18px;" width="700" align="center">
								<tr>
									<td class="esd-stripe" align="left">

									</td>
								</tr>
							</table>
							<table>
								<tr>
									<td class="esd-stripe" esd-custom-block-id="7684" align="center">
										<table class="es-footer-body" width="700" cellspacing="0" cellpadding="0" align="center">
											<tbody>
												<tr>
													<td class="esd-block-text es-p15t es-p10b" align="center">
														<p style="margin: 0; color: #a0aec0; margin-top: 32px; font-weight: 700; letter-spacing: .025em; font-size: 1rem; line-height: 1.325rem;">&copy; eventify.com</p>
														<p style="margin: 0; color: #a0aec0; letter-spacing: .025em; font-size: 1rem; line-height: 1.325rem;">Guwahati, Assam</p>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>

</html>