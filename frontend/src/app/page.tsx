import Link from "next/link";
import { css } from "@/styles/panda-css";

export default function Home() {
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
        <div className={css({ textAlign: "center" })}>
          <h1
            className={css({
              sm: {
                fontSize: "5xl",
              },
              fontSize: "3xl",
              textAlign: "center",
              marginBottom: "10",
            })}
          >
            家計簿アプリ
          </h1>
          <p
            className={css({
              marginBottom: "14",
            })}
          >
            家計を簡単に管理するアプリケーション。
          </p>
          <Link
            href="/sign-in"
            className={css({
              backgroundColor: "blue.500",
              paddingX: "8",
              paddingY: "4",
              color: "white",
              fontWeight: "bold",
              borderRadius: "md",
            })}
          >
            ログインする
          </Link>
        </div>
      </div>
    </main>
  );
}
