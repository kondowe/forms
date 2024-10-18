import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function NewVersionDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (v: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
        </DialogHeader>
        <DialogDescription>
        Form Builder a UI based codegen tool to easily create @shadcn/ui forms.
        <i>Please note This website is best viewed on desktop</i>
        </DialogDescription>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Okay</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
