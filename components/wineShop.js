import Image from 'next/image'
import CustomButton from './customButton'
import { useTranslation } from 'next-i18next'

export default function WineShop() {
    const { t } = useTranslation('common')

    return (
        <div className="wineshop grid grid-cols-2 h-full">

            <div className="flex flex-col justify-center items-start relative mr-36 mt-40">
                <h1 className='font-butlerregular text-5xl text-original mb-7 max-[600px]:text-3xl'>{t("wineshoptitle")}</h1>

                <div className='text-lg font-avenirmedium mb-10'>
                    <p className='mb-10 text-textcolor'>
                    {t("wineshop")}
                    </p>
                </div>

                {/* <CustomButton title={t("READ MORE")} /> */}
            </div>

            <div className="relative">
                <img src='/images/wineshopbg.svg' alt="wineshopbg" className='w-full h-screen' />

                <div className="absolute bottom-28 -right-28">
                    <Image src="/images/bomb2.svg" alt="image" width={450} height={450} />
                </div>
            </div>
        </div>
    )
}