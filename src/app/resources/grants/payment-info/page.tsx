export default function PaymentInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      <iframe
        src="/forms/grant-payment-info.html"
        className="w-full min-h-screen border-0"
        title="Grant Recipient Payment Information"
      />
    </div>
  )
}
