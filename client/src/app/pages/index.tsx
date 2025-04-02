import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Мой проект</title>
                <meta name="description" content="Описание проекта" />
            </Head>
            <main>
                <h1 className="text-3xl font-bold">Добро пожаловать!</h1>
            </main>
        </>
    )
}