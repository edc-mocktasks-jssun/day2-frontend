import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

type Params = { params: Promise<{ id: string }> }

export async function PATCH(request: Request, { params }: Params) {
  const resolvedParams = await params
  const id = resolvedParams.id
  const { title, description } = await request.json()

  const { data, error } = await supabase
    .from('ideas')
    .update({ title, description })
    .eq('id', id)
    .select()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  if (!data || data.length === 0) {
    return NextResponse.json({ error: 'Idea not found' }, { status: 404 })
  }
  return NextResponse.json(data[0])
}

export async function DELETE(request: Request, { params }: Params) {
  const resolvedParams = await params
  const id = resolvedParams.id

  const { error } = await supabase
    .from('ideas')
    .delete()
    .eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ message: 'Idea deleted successfully' })
}