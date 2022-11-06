import { ChangeEvent, useState } from 'react'
import { QrCode as QrIcon } from 'phosphor-react'

import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

export function QrCode() {
    const [link, setLink] = useState('')
    const [qrCodeLink, setqrCodeLink] = useState('')

    function handleGenerate(link: string) {
        QRCodeLink.toDataURL(link, {
            width: 600,
            margin: 3
        }, function (err, url) {
            setqrCodeLink(url)
        })
    }

    function handleQrCode(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()

        setLink(event.target.value)
        handleGenerate(event.target.value)
    }

    return (
        <div className='w-screen h-screen flex flex-col px-4 gap-4 items-center justify-center dark:text-white'>
            <QRCode value={link} />

            <div className='flex items-center h-12 w-full max-w-[400px] py-4 px-3 rounded bg-slate-200 dark:bg-slate-800 focus-within:ring-2 ring-slate-900 dark:ring-sky-500'>
                <input
                    className='bg-transparent flex-1 text-slate-500 dark:text-slate-300 text-xs placeholder:text-slate-500 dark:placeholder:text-slate-300 outline-none'
                    type='text'
                    placeholder='Digite seu link...'
                    value={link}
                    onChange={(e) => handleQrCode(e)}
                />
            </div>

            <a
                className='flex items-center justify-between px-4 h-14 w-full max-w-[180px] bg-slate-900 dark:bg-sky-500 rounded font-semibold text-white text-md transition-colors hover:bg-slate-700 dark:hover:bg-sky-400 cursor-pointer focus:ring-2 ring-white'
                href={qrCodeLink} download={`qrcode.png`}
            >
                Baixar QR Code
                <QrIcon size={32} />
            </a>
        </div>
    )
}