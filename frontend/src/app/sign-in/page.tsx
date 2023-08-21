import Link from "next/link";
import { css } from "@/styles/panda-css";

const textFieldEmailId = "signin-email" as const;
const textFieldPasswordId = "signin-password" as const;

const Page = () => {
  const signIn = async () => {
    "use server";
    console.log("ログインしました");
  };

  return (
    <main>
      <div
        className={css({
          minHeight: "screen",
          minWidth: "screen",
          display: "grid",
          placeItems: "center",
        })}
      >
        <div>
          <form action={signIn} className={css({ marginBottom: 10 })}>
            <h1
              className={css({
                fontWeight: "bold",
                fontSize: "xl",
                textAlign: "center",
                marginBottom: "6",
              })}
            >
              ログイン
            </h1>
            <div className={css({ marginBottom: "4" })}>
              <label
                htmlFor={textFieldEmailId}
                className={css({ display: "flex", marginBottom: 2 })}
              >
                メールアドレス
              </label>
              <input
                type="email"
                id={textFieldEmailId}
                className={css({
                  display: "block",
                  borderStyle: "solid",
                  borderWidth: "thin",
                  borderColor: "gray.400",
                  borderRadius: "sm",
                  backgroundColor: "white",
                })}
              />
            </div>
            <div className={css({ marginBottom: "6" })}>
              <label
                htmlFor={textFieldPasswordId}
                className={css({ display: "flex", marginBottom: 2 })}
              >
                パスワード
              </label>
              <input
                type="password"
                id={textFieldPasswordId}
                className={css({
                  display: "block",
                  borderStyle: "solid",
                  borderWidth: "thin",
                  borderColor: "gray.400",
                  borderRadius: "sm",
                  backgroundColor: "white",
                })}
              />
            </div>
            <button
              className={css({
                marginX: "auto",
                display: "block",
                width: "full",
                backgroundColor: "blue.500",
                borderRadius: "md",
                paddingX: "8",
                paddingY: "2",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              })}
            >
              ログイン
            </button>
          </form>
          <div className={css({ textAlign: "center" })}>
            <Link href="/">トップに戻る</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
