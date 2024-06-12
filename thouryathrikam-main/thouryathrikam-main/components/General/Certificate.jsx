import {
  Page,
  Font,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

Font.register({
  family: "Poppins",
  src: "/font/Poppins-Medium.ttf",
  fontStyle: "normal",
  fontWeight: "heavy",
});
Font.register({
  family: "Stylish",
  src: "/font/stylish.ttf",
  fontStyle: "normal",
  fontWeight: "bold",
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#DBD5C5",
    color: "#714f70",
    fontFamily: "Poppins",
    position: "relative",
  },
  arts_logo: {
    width: 40,
    height: 62,
  },
  college_text: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  college_logo: {
    width: 58,
    height: 58,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 17.5,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  main_content: {
    width: 750,
    marginTop: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  certificate_id: {
    flexDirection: "row",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 2,
    width: 250,
    borderColor: "#714f70",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 4,
    marginTop: 15,
  },
  sign: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 700,
    paddingHorizontal: 20,
  },
  sign_individual: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Certificate({ name, prize, dept, event, year, id }) {
  return (
    <Document>
      <Page size={[1150, 720]} style={styles.page}>
        <View style={styles.header}>
          <Image src="/college_logo.png" style={styles.college_logo} />
          <View style={styles.college_text}>
            <Text>COLLEGE UNION</Text>
            <Text>GOVERNMENT ENGINEERING COLLEGE WAYANAD, MANANTHAVADY</Text>
          </View>
          <Image src="/arts_logo.png" style={styles.arts_logo} />
        </View>

        <Text
          style={{
            fontSize: 70,
            position: "absolute",
            top: 80,
            fontFamily: "Stylish",
            marginLeft: 285,
          }}
        >
          Thouryathrikam &apos;22
        </Text>

        <View style={styles.main}>
          <View style={styles.main_content}>
            <Text style={{ fontSize: 35, marginTop: 6 }}>
              CERTIFICATE OF APPRECIATION
            </Text>

            <View style={styles.content}>
              <Text style={{ fontSize: 16 }}>
                This certificate is awarded to
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  paddingVertical: 2,
                  fontFamily: "Stylish",
                  textDecoration: "underline",
                }}
              >
                {name?.toUpperCase()}
              </Text>
              <Text style={{ fontSize: 16 }}>of</Text>
              <Text
                style={{
                  paddingVertical: 3,
                  fontSize: 22,
                  fontFamily: "Stylish",
                  textDecoration: "underline",
                }}
              >
                {year} Year{" "}
                {dept == "CSE"
                  ? "Computer Science and Engineering"
                  : dept == "EC2"
                  ? "Electronics and Communication Engineering"
                  : dept == "ECE2"
                  ? "Electronics and Communication Engineering"
                  : dept == "ECE1"
                  ? "Electronics and Communication Engineering"
                  : dept == "EC-1"
                  ? "Electronics and Communication Engineering"
                  : dept == "EC-2"
                  ? "Electronics and Communication Engineering"
                  : dept == "EC1"
                  ? "Electronics and Communication Engineering"
                  : dept == "ECE"
                  ? "Electronics and Communication Engineering"
                  : dept == "ECE1"
                  ? "Electronics and Communication Engineering"
                  : dept == "EEE"
                  ? "Electrical and Electronics Engineering"
                  : dept == "ME"
                  ? "Mechanical Engineering"
                  : dept == "MECH" && "Mechanical Engineering"}
              </Text>
              <Text style={{ fontSize: 16 }}>
                for {prize > 0 && "Securing "}
                <Text
                  style={{
                    fontSize: 22,
                    textDecoration: "underline",
                    fontFamily: "Stylish",
                    paddingVertical: 3,
                  }}
                >
                  {(prize === 0 || prize === null) && "Participating"}
                  {prize == 1
                    ? "First"
                    : prize == 2
                    ? "Second"
                    : prize == 3 && "Third"}
                </Text>{" "}
                {prize > 0 && "Position "}in
              </Text>
              <Text
                style={{
                  paddingVertical: 3,
                  fontSize: 22,
                  fontFamily: "Stylish",
                  textDecoration: "underline",
                }}
              >
                {event}
              </Text>
              <Text style={{ fontSize: 16 }}>
                in the College Union Arts Fest Thouryathrikam &apos;22
              </Text>
              <Text style={{ fontSize: 16 }}>
                Held on June 5, 6, 7, 8, 9 2022
              </Text>
            </View>

            <View style={styles.certificate_id}>
              <Text>Certificate ID: {`THM${id}`}</Text>
            </View>

            <View style={styles.sign}>
              <View style={styles.sign_individual}>
                <Image src="/afthar.png" style={{ width: 90, height: 90 }} />
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                  Afthar K P
                </Text>
                <Text style={{ textAlign: "center", fontSize: 13 }}>
                  Fine Arts Secretary
                </Text>
                <Text style={{ textAlign: "center", fontSize: 13 }}>
                  College Union GECW
                </Text>
              </View>
              <View style={styles.sign_individual}>
                <Image
                  src="https://wichllzvcqbjpkclywqx.supabase.co/storage/v1/object/public/signature/advisor.png"
                  style={{ width: 90, height: 90 }}
                />
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                  Muhammed Fasil C
                </Text>
                <Text style={{ textAlign: "center", fontSize: 13 }}>
                  Staff Adviser
                </Text>
                <Text style={{ textAlign: "center", fontSize: 13 }}>
                  Thouryathrikam &apos;22 GECW
                </Text>
              </View>
              <View style={styles.sign_individual}>
                <Image
                  src="https://wichllzvcqbjpkclywqx.supabase.co/storage/v1/object/public/signature/principal.png"
                  style={{ width: 90, height: 90 }}
                />
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                  Dr. Anitha V S
                </Text>
                <Text style={{ textAlign: "center", fontSize: 13 }}>
                  Principal
                </Text>
                <Text style={{ textAlign: "center", fontSize: 13 }}>GECW</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          src="/main.png"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: 700,
            width: 1000,
          }}
        />
      </Page>
    </Document>
  );
}
