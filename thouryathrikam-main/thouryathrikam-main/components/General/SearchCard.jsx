import { useForm } from "react-hook-form";
import { useState } from "react";

import { fetchByEmail, handleEdit } from "@/util/supabase.helper";

import Input from "@/components/Form/Input";
import PersonalDetails from "./PersonalDetails";
import CertificateDetails from "./CertificateDetails";

export default function SearchCard() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const [groupData, setgroupData] = useState(null);
	const [singeData, setsingleData] = useState(null);
	const [regEmails, setregEmails] = useState({ single: [], group: [] });
	const [error, seterror] = useState(false);
	const [loading, setloading] = useState(false);
	const [show, setshow] = useState(false);

	const onSubmit = async (data) => {
		seterror(false);
		setshow(false);
		setgroupData(null);
		setsingleData(null);
		await fetchByEmail(
			data.email,
			setsingleData,
			setgroupData,
			seterror,
			setloading,
			setregEmails
		);
	};

	return (
		<div
			className="flex flex-col space-y-6 justify-center items-center
    text-white  mx-2  "
		>
			<div className="flex flex-col space-y-2 justify-center items-center bg-zinc-900 rounded-3xl p-5">
				<h2 className="font-man">Certificates</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-4"
				>
					<Input
						type="email"
						label="College Mail ID"
						htmlFor="email"
						error={errors.email}
						register={register}
						required={true}
					/>

					{error && (
						<div className="flex flex-col space-y-2 pb-1">
							<p className=" text-yellow-600">
								Please check the mail id you entered or there is no
								participation record exist. If it is an error please contact
								&nbsp;
								<a
									className="text-yellow-600 font-bold underline"
									target="_blank"
									rel="noreferrer"
									href="https://wa.me/916238065153"
								>
									wa.me/916238065153
								</a>
							</p>
						</div>
					)}
					{(regEmails?.single?.length > 0 || regEmails?.group?.length > 0) && (
						<div className="flex flex-col space-y-2">
							<p className=" text-zinc-100">
								Also check with your personal mail id or the following mail ids
								which is in our database, if you haven&apos;t got the required
								certificates or entered wrong mail id when registering.
							</p>
							<ul className="list-disc text-sm mx-2 text-zinc-100">
								<li>
									For Single Participation:
									<br />
									<span className="text-yellow-500 underline">
										{regEmails?.single?.join(", ")}
									</span>
								</li>
								<li>
									For Group Participation: <br />
									<span className="text-yellow-500 underline">
										{regEmails?.group?.join(", ")}
									</span>
								</li>
							</ul>
						</div>
					)}

					{loading ? (
						<button className="submit bg-green-500">Loading...</button>
					) : (
						<input
							type="submit"
							value="Submit"
							className="submit bg-green-500"
						/>
					)}
				</form>
			</div>

			{(singeData || groupData) && (
				<div className="flex flex-col space-y-4 bg-zinc-900 rounded-3xl  p-5">
					<h3>Validate Details</h3>

					<ul className="list-disc text-sm mx-4">
						<li>Change your name as per the college ID.</li>
						<li>
							Please note that, year appears in the certificate will not be the
							current year.
						</li>
						<li>
							If there is an error in the year, department, event participation
							or result, please contact&nbsp;
							<a
								className="text-green-500 underline"
								target="_blank"
								rel="noreferrer"
								href="https://wa.me/916238065153"
							>
								wa.me/916238065153
							</a>
						</li>
					</ul>

					<PersonalDetails
						onClick={(name, seterror) => {
							handleEdit(
								singeData?.personal_details?.Email ||
									groupData?.personal_details?.Email,
								name,
								singeData,
								groupData,
								setsingleData,
								setgroupData,
								seterror,
								setloading,
								onSubmit
							);
						}}
						loading={loading}
						name={
							singeData?.personal_details?.name ||
							groupData?.personal_details?.name
						}
						email={
							singeData?.personal_details?.Email ||
							groupData?.personal_details?.Email
						}
						year={
							singeData?.personal_details?.year ||
							groupData?.personal_details?.year
						}
						dept={
							singeData?.personal_details?.dept ||
							groupData?.personal_details?.dept
						}
					/>
					<div className="w-full flex flex-col space-y-2 justify-center items-center">
						<p className="text-green-500 underline">
							No changes required? <span className="text-white">or</span>{" "}
							Already made the changes!
						</p>
						<button
							className="submit bg-green-500"
							onClick={() => setshow(true)}
						>
							Show certificates
						</button>
					</div>
				</div>
			)}

			{show && (singeData || groupData) && (
				<div className="flex flex-col space-y-4 bg-zinc-900 rounded-3xl  px-8  py-6">
					<div className="flex flex-col space-y-2">
						<h3>Event Participation Details</h3>
						<p className="text-green-500 break-words">
							Please wait while generating the certificates.
						</p>
					</div>
					<div className="flex flex-col space-y-8">
						{singeData && (
							<CertificateDetails
								type="Individual Events Certificates"
								participant={singeData?.personal_details?.name}
								year={singeData?.personal_details?.year}
								dept={singeData?.personal_details?.dept}
								data={{
									event_1: singeData?.personal_details?.event_1 && {
										name: singeData?.personal_details?.event_1,
										result: singeData?.personal_details?.result_1,
										cert: singeData?.personal_details?.cert_1,
									},
									event_2: singeData?.personal_details?.event_2 && {
										name: singeData?.personal_details?.event_2,
										result: singeData?.personal_details?.result_2,
										cert: singeData?.personal_details?.cert_2,
									},
									event_3: singeData?.personal_details?.event_3 && {
										name: singeData?.personal_details?.event_3,
										result: singeData?.personal_details?.result_3,
										cert: singeData?.personal_details?.cert_3,
									},
									event_4: singeData?.personal_details?.event_4 && {
										name: singeData?.personal_details?.event_4,
										result: singeData?.personal_details?.result_4,
										cert: singeData?.personal_details?.cert_4,
									},
									event_5: singeData?.personal_details?.event_5 && {
										name: singeData?.personal_details?.event_5,
										result: singeData?.personal_details?.result_5,
										cert: singeData?.personal_details?.cert_5,
									},
									event_6: singeData?.personal_details?.event_6 && {
										name: singeData?.personal_details?.event_6,
										result: singeData?.personal_details?.result_6,
										cert: singeData?.personal_details?.cert_6,
									},
								}}
							/>
						)}

						{groupData && (
							<CertificateDetails
								type="Group Events Certificates"
								participant={groupData?.personal_details?.name}
								year={groupData?.personal_details?.year}
								dept={groupData?.personal_details?.dept}
								id={groupData?.personal_details?.id}
								data={{
									event_1: groupData?.personal_details?.event_1 && {
										name: groupData?.personal_details?.event_1,
										result: groupData?.personal_details?.result_1,
										cert: groupData?.personal_details?.cert_1,
									},
									event_2: groupData?.personal_details?.event_2 && {
										name: groupData?.personal_details?.event_2,
										result: groupData?.personal_details?.result_2,
										cert: groupData?.personal_details?.cert_2,
									},
									event_3: groupData?.personal_details?.event_3 && {
										name: groupData?.personal_details?.event_3,
										result: groupData?.personal_details?.result_3,
										cert: groupData?.personal_details?.cert_3,
									},
								}}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
