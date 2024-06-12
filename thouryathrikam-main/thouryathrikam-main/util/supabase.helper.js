import { supabase } from "supabase";

export async function handleEdit(
	email,
	name,
	singeData,
	groupData,
	setsingleData,
	setgroupData,
	seterror,
	setloading,
	onSubmit
) {
	seterror(false);
	const names = name.split(" ");
	if (names?.length > 0) {
		let flag = 0;
		names.forEach((item) => {
			const regexp = new RegExp(item, "i");
			const index = email.indexOf("_");
			email.slice(0, index).search(regexp) === 0 && (flag = 1);
		});
		if (flag === 0) {
			seterror(true);
			return;
		}
		setloading(true);
		if (singeData) {
			await supabase
				.from("single_participation")
				.update({ name: name })
				.eq("Email", email);
		}

		if (groupData) {
			await supabase
				.from("group_participation")
				.update({ name: name })
				.eq("Email", email);
		}
		setloading(false);

		setsingleData(null);
		setgroupData(null);

		onSubmit({ email: email });
	}
}

export function matchEvents(personalDetails, eventDetails) {
	eventDetails.forEach((event) => {
		if (event.id == personalDetails.event_1) {
			personalDetails.cert_1 = `${personalDetails.id}${
				personalDetails.event_1 + 10
			}`;
			personalDetails.event_1 = event.name;
		} else if (event.id == personalDetails.event_2) {
			personalDetails.cert_2 = `${personalDetails.id}${
				personalDetails.event_2 + 10
			}`;
			personalDetails.event_2 = event.name;
		} else if (event.id == personalDetails.event_3) {
			personalDetails.cert_3 = `${personalDetails.id}${
				personalDetails.event_3 + 10
			}`;
			personalDetails.event_3 = event.name;
		} else if (event.id == personalDetails.event_4) {
			personalDetails.cert_4 = `${personalDetails.id}${
				personalDetails.event_4 + 10
			}`;
			personalDetails.event_4 = event.name;
		} else if (event.id == personalDetails.event_5) {
			personalDetails.cert_5 = `${personalDetails.id}${
				personalDetails.event_5 + 10
			}`;
			personalDetails.event_5 = event.name;
		} else if (event.id == personalDetails.event_6) {
			personalDetails.cert_6 = `${personalDetails.id}${
				personalDetails.event_6 + 10
			}`;
			personalDetails.event_6 = event.name;
		}
	});
	return personalDetails;
}

export async function fetchByEmail(
	email,
	setsingleData,
	setgroupData,
	seterror,
	setloading,
	setregEmails
) {
	setloading(true);
	setregEmails({ single: [], group: [] });

	const e1 = await fetchSingle(email, setsingleData);
	const e2 = await fetchGroup(email, setgroupData);
	if (e1 && e2) {
		seterror(true);
	}
	const regEmails = await fetchSimiliarEmails(email);
	setregEmails({
		single: regEmails[0]?.data?.map((item) => item?.Email),
		group: regEmails[1]?.data?.map((item) => item?.Email),
	});

	setloading(false);
}

async function fetchSimiliarEmails(email) {
	let index;
	for (let i = 0; i < email.length; i++) {
		const char = email[i];
		if (char === "_") {
			index = i;
			break;
		}
		if (!isNaN(char)) {
			index = i;
			break;
		}
		if (char === "@") {
			index = i;
			break;
		}
	}
	const emailString = email.slice(0, index);

	const single_emails = await supabase
		.from("single_participation")
		.select("Email")
		.like("Email", `%${emailString}%`)
		.range(0, 9);
	const group_emails = await supabase
		.from("group_participation")
		.select("Email")
		.like("Email", `%${emailString}%`)
		.range(0, 9);

	return [single_emails, group_emails];
}

export async function fetchSingle(email, setsingleData) {
	const personalDetails = await supabase
		.from("single_participation")
		.select()
		.eq("Email", email);
	const eventDetails = await supabase.from("single_events").select();
	if (
		personalDetails?.error ||
		personalDetails?.data?.length === 0 ||
		eventDetails?.error
	) {
		setsingleData(null);
		return true;
	}
	const finalDetails = matchEvents(
		personalDetails?.data[0],
		eventDetails?.data
	);
	setsingleData({
		personal_details: finalDetails,
	});
}

export async function fetchGroup(email, setgroupData) {
	const personalDetails = await supabase
		.from("group_participation")
		.select()
		.eq("Email", email);
	const eventDetails = await supabase.from("group_events").select();
	if (
		personalDetails?.error ||
		personalDetails?.data?.length === 0 ||
		eventDetails?.error
	) {
		setgroupData(null);
		return true;
	}
	const finalDetails = matchEvents(
		personalDetails?.data[0],
		eventDetails?.data
	);
	setgroupData({
		personal_details: finalDetails,
		personalDetails,
	});
}

export async function fetchSingleEvents(setsingle) {
	const single = await supabase.from("single_events").select();
	setsingle(single.data);
}

export async function fetchGroupEvents(setgroup) {
	const group = await supabase.from("group_events").select();
	setgroup(group.data);
}

// const updateEvent = async () => {
//     const part = await supabase.from('group_participation').select('Email,event')
//     const events = await supabase.from('group_events').select()
//     part?.data?.forEach(ele => {
//         const splittedEvents = ele?.event?.split(',')
//         splittedEvents?.forEach(async (event, index) => {
//             let eve
//             events.data.forEach(e => {
//                 if(e.name == event) eve = e.id
//             })
//             const update = {}
//             update[`event_${index+1}`] = eve
//             await supabase.from('group_participation').update(update).eq('Email', ele.Email)
//         });
//     });
// }

export const fetchAllSingleData = async (setdata, setsingle, setloading) => {
	setloading(true);
	const personalDetails = await supabase
		.from("single_participation")
		.select()
		.order("id", { ascending: true });
	const eventDetails = await supabase.from("single_events").select();
	if (personalDetails?.error || eventDetails?.error) {
		console.log(personalDetails?.error);
		return;
	}
	let ar = [];
	personalDetails?.data?.forEach((ele) => {
		const finalDetails = matchEvents(ele, eventDetails?.data);
		ar.push(finalDetails);
	});
	setsingle(eventDetails?.data);
	setdata(ar);
	setloading(false);
};

export const fetchAllGroupData = async (setdata, setgroup, setloading) => {
	setloading(true);
	const personalDetails = await supabase.from("group_participation").select();
	const eventDetails = await supabase.from("group_events").select();
	if (personalDetails?.error || eventDetails?.error) {
		console.log(personalDetails?.error);
		return;
	}
	let ar = [];
	personalDetails?.data?.forEach((ele) => {
		const finalDetails = matchEvents(ele, eventDetails?.data);
		ar.push(finalDetails);
	});
	setgroup(eventDetails?.data);
	setdata(ar);
	setloading(false);
};

export async function uploadSign(image, user, router) {
	const { data, error } = await supabase.storage
		.from("signature")
		.upload(`${user}.png`, image, {
			cacheControl: "3600",
			upsert: true,
		});

	if (error) {
		console.log(error);
	} else {
		console.log("s");
		router.reload();
	}
}
