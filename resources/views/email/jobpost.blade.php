<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
​

<head>
	<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
	<title>Job Post Created</title>
	<style>
		body {
			font-family: 'Arial', sans-serif;
		}
	</style>
</head>
​

<body>
	<table width="100%">
		<tr>
			<td class="esd-stripe" align="center">
				<table width="700" cellspacing="0" cellpadding="0" style="background-color: #edf2f7; padding: 22px; border-radius: 16px;">
					<tr>
						<td class="esd-stripe" align="left">
							<table>
								<tr>
									<td class="esd-stripe" esd-custom-block-id="7799" align="left">
										<table class="es-header-body" width="700" cellspacing="0" cellpadding="0">
											<tbody>
												<tr>
													<td class="esd-block-text es-m-txt-c" align="left">
														<img src="{{url('jh-logo.png')}}" alt="jh-logo" style="margin-bottom: 16px;">
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</table>
							<table style="background-color: #ffffff; padding: 18px; border-radius: 16px;" width="700" align="center">
								<tr>
									<td class="esd-stripe" align="left">
										<p>Dear Administrator,</p>
										​
										<p>New Job Post added by <strong>{{ $userName }}</strong>.</p>
										​
										<p>Job Details:</p>
										<table style="border-collapse: collapse; width: 100%;">
											<tr>
												<th align="left" style="width: 140px; background: #eee; border: 1px solid #ccc; padding: 8px;">Job Title</th>
												<td style="border: 1px solid #ccc; padding: 8px;">{{ $job_title }}</td>
											</tr>
											<tr>
												<th align="left" style="width: 140px; background: #eee; border: 1px solid #ccc; padding: 8px;">Job Location</th>
												<td style="border: 1px solid #ccc; padding: 8px;">{{ $job_location }}</td>
											</tr>
											<tr>
												<th align="left" style="width: 140px; background: #eee; border: 1px solid #ccc; padding: 8px;">Job Category</th>
												<td style="border: 1px solid #ccc; padding: 8px;">{{ $job_category }}</td>
											</tr>
											<tr>
												<th align="left" style="width: 140px; background: #eee; border: 1px solid #ccc; padding: 8px;">Job Type</th>
												<td style="border: 1px solid #ccc; padding: 8px;">{{ $job_type }}</td>
											</tr>
										</table>
										​
										<p>Regards, <br />
											<strong>Job Harbour's Team</strong>
										</p>
									</td>
								</tr>
							</table>
							<table>
								<tr>
									<td class="esd-stripe" esd-custom-block-id="7684" align="center">
										<table class="es-footer-body" width="700" cellspacing="0" cellpadding="0"
											align="center">
											<tbody>
												<tr>
													<td class="esd-block-text es-p15t es-p10b" align="center">
														<p style="margin: 0; color: #a0aec0; margin-top: 32px; font-weight: 700; letter-spacing: .025em; font-size: 1rem; line-height: 1.325rem;">
															&copy; jobsharbour.com</p>
														​
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