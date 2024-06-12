import Certificate from "@/components/General/Certificate";
import { uploadSign } from "@/util/supabase.helper";
import { PDFViewer } from "@react-pdf/renderer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Demo() {
  const [client, setclient] = useState(false);
  const [advisor, setadvisor] = useState(false);
  const [principal, setprincipal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    verifyUser();
  }, []);

  useEffect(() => {
    setclient(true);
  }, []);

  function uploadImage(image, user) {
    uploadSign(image, user, router);
  }

  function verifyUser() {
    const user = window.prompt("Enter Credential");
    if (user == null) {
      router.push("/certificate/all/single");
      return;
    } else if (user == process.env.NEXT_PUBLIC_ADVISOR) {
      setadvisor(true);
    } else if (user == process.env.NEXT_PUBLIC_PRINCIPAL) {
      setprincipal(true);
    } else {
      router.push("/certificate/all/single");
      return;
    }
  }

  return (
    <div className="flex space-between space-x-2 bg-zinc-900 min-h-screen max-w-screen">
      {(advisor || principal) && client && (
        <PDFViewer width={1600} height={1000}>
          <Certificate
            name={"Afthar K P"}
            prize={1}
            dept={"ME"}
            year={"2"}
            event={"Poem Writing Malayalam"}
            id={"54756"}
          />
        </PDFViewer>
      )}

      <div className="flex flex-col mt-10">
        {advisor && (
          <div className="flex flex-col space-y-2 bg-zinc-800 text-white rounded-lg px-4 py-6 justify-center items-center">
            <h6 className="text-center">Upload Advisor Signature</h6>
            <input
              type="file"
              placeholder="s"
              accept=".png"
              className="block w-full text-sm text-zinc-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-green-600
            hover:file:bg-violet-100"
              onChange={(e) => uploadImage(e.target.files[0], "advisor")}
            />
          </div>
        )}

        {principal && (
          <div className="flex flex-col space-y-2 bg-zinc-800 text-white rounded-lg px-4 py-6 justify-center items-center">
            <h6 className="text-center">Upload Principal Signature</h6>
            <input
              type="file"
              placeholder="s"
              accept=".png"
              className="block w-full text-sm text-zinc-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-green-600
            hover:file:bg-violet-100"
              onChange={(e) => uploadImage(e.target.files[0], "principal")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
