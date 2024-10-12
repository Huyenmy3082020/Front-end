import styles from '../../Myorder/AllOrder/AllOrder.module.scss';
import doitra from '../../../assets/doitra.png';
function AllOrder() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '16px' }}>
                    <div className={styles.wrapperList}>
                        <img
                            src="https://salt.tikicdn.com/cache/750x750/ts/product/80/dc/a5/002eaef3abbbe7aa777b1c0127c46fce.png.webp"
                            width="48px"
                            height="48px"
                            alt=""
                        />
                    </div>
                    <div style={{ paddingLeft: '10px' }}>
                        <p>asdjasdkasdjansasdksajdlsadjaospdiasd</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/account/store.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                            tiki trading
                        </div>
                        <img src={doitra} alt="" width="114px" height="20px" />
                    </div>
                </div>
                <div> 0390129302</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className={styles.btnMua}> mua lai </button>
                <button className={styles.btnMua}> mua lai </button>
                <button className={styles.btnMua}> mua lai </button>
            </div>
        </div>
    );
}

export default AllOrder;
