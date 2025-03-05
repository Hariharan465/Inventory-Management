import { Dialog } from 'primereact/dialog';
import { useGetInvoiceByIdQuery } from '../../../provider/queries/Order.query';
import Loader from '../../../components/Loader';
import moment from 'moment';
import Barcode from 'react-barcode';
import { Margin, usePDF } from 'react-to-pdf';

const ShowAndPrintModel = ({ setVisible , visible , id}:any) => {

    const { data , isLoading , isError , isFetching } = useGetInvoiceByIdQuery(id)

    const currentDate = new Date().toISOString().split("T")[0]; // e.g., 2025-03-02
    const filename = `${data && data.consumer &&data.consumer.name}-report-${currentDate}.pdf`;

    const { toPDF , targetRef } = usePDF({filename , page:{
        margin:Margin.MEDIUM
    }});

    if( isFetching || isLoading ){
        return <Loader />
    } 

    if( isError ){
        return <>
          Something went wrong
        </>
    } 

    type OrderDoc = {
        name : string,
        id : string,
        quantity : number;
        price : number
    }

  return (
    <>
           <Dialog draggable={false} visible={visible} className="w-100 mx-auto lg:mx-0 lg:w-1/2"
           style={{
            transform: "scale(1)", // Keep the same scale
          }}
            onHide={() => {setVisible(false);}}>

           <div ref={targetRef}
            className="m-0 px-5">
            {/* {JSON.stringify(data)} */}
            <h1 className='mb-15 font-bold text-3xl font-poppins'>VASANTH CONSTRUCTION</h1>

<div className="flex items-start gap-x-10 py-5  justify-between ">
    <div className="w-1/2 flex  flex-col gap-y-2">
    
                        <h1 className="font-semibold text-xl capitalize">{data &&data.consumer && data.consumer.name}</h1>
                        <p className='text-sm capitalize'>{data.consumer && data.consumer.address}</p>
                        <p className='font-semibold'>Date: {moment(new Date(data.createdAt)).format("lll")} </p>
    </div>
  <div className="w-1/2">
      <Barcode displayValue={false}  width={1} height={50} value={data && data._id} />
      <h1 className='font-semibold capitalize'>Suppiler : {data && data.user.name} </h1>
  </div>
</div>


<div className="items py-2">
    <table className="border w-full">
        <thead className='border'>
                    <tr>
              <th className='border py-2'>ID</th>
              <th className='border py-2'>Material</th>
              <th className='border py-2'>Quantity</th>
              <th className='border py-2'>Price(in      &#8377;)</th>
                    </tr>
        </thead>

        <tbody>
            {data.items && data.items.length > 0 && data.items.map((c: OrderDoc, i:number)=>{
                return <tr key={i} className='py-2'>
                    <td className='border text-center py-2'>{i+1}</td>
                    <td className='border text-center py-2'>{c.name}</td>
                    <td className='border text-center py-2'>{c.quantity}</td>
                    <td className='border text-center py-2'>&#8377; {c.price}</td>
                </tr>
            })}
        </tbody>

        <tfoot>
            <tr>
                <td colSpan={3} className='border font-bold text-center py-2 capitalize'>
                    total
                </td>

                <td className='border font-bold text-center py-2 capitalize'>
                    &#8377; {
                      data.items && data.items.length > 0 && data.items.map((cur: OrderDoc ) =>cur.price ).reduce((a:any,c:any)=>a+c,0)

                    } /-
                </td>
            </tr>
        </tfoot>

    </table>
</div>

{/* <div className="mb-3  w-full flex py-5  text-end  flex-col justify-end ">
  <QRCode className='w-[20%]  ml-auto  py-0' style={{ height: 'auto' }} value='dasd ' />
  <h1 className='text-end px-5'>Scan And Pay</h1>
</div>               */}


</div>
<footer>
    <button className='px-6 py-2 outline-none bg-red-500 rounded-md text-white'
     onClick={()=>toPDF({})} 
    >Generate</button>
</footer>
                    
                    </Dialog>    
    </>
  )
}

export default ShowAndPrintModel
