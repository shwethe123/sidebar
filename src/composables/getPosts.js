import { ref } from "vue";
import { db1, db2, db3, serverTimestamp } from "@/firebase/config";

const getPosts = () => {
    const postsDb1 = ref([]);
    const postsDb2 = ref([]);
    const postsDb3 = ref([]);
    const sales_inDb1 = ref([]);
    const sales_inDb2 = ref([]);
    const sales_inDb3 = ref([]);
    const sales_outDb1 = ref([]);
    const sales_outDb2 = ref([]);
    const sales_outDb3 = ref([]);
    const car_orderDb1 = ref([]);
    const car_orderDb2 = ref([]);
    const car_orderDb3 = ref([]);
    const order_inDb1 = ref([]);
    const order_in2Db1 = ref([]);
    const order_inDb2 = ref([]);
    const order_inDb3 = ref([]);
    const accountingDb1 = ref([]);
    const accountingDb2 = ref([]);
    const accountingDb3 = ref([]);
    const auditDb1 = ref([]);
    const auditDb2 = ref([]);
    const auditDb3 = ref([]);
    const out_JutyDb1 = ref([]);
    const out_JutyDb2 = ref([]);
    const out_JutyDb3 = ref([]);
    const error = ref("");
    const loading = ref(true);

    const load = async () => {
        loading.value = true;
        try {
            const [
                postsResponseDb1, postsResponseDb2, postsResponseDb3,
                sales_inResponseDb1, sales_inResponseDb2, sales_inResponseDb3,
                sales_outResponseDb1, sales_outResponseDb2, sales_outResponseDb3,
                car_orderResponseDb1, car_orderResponseDb2, car_orderResponseDb3,
                order_inResponseDb1, order_in2ResponseDb1, order_inResponseDb2, order_inResponseDb3,
                accountingResponseDb1, accountingResponseDb2, accountingResponseDb3,
                auditResponseDb1, auditResponseDb2, auditResponseDb3,
                out_JutyResponseDb1, out_JutyResponseDb2, out_JutyResponseDb3
            ] = await Promise.all([
                db1.collection("g_posts").orderBy("created_at").get(), db2.collection("g_posts").orderBy("created_at").get(), db3.collection("g_posts").orderBy("created_at").get(),
                db1.collection("sales_in").orderBy("created_at").get(), db2.collection("sales_in").orderBy("created_at").get(), db3.collection("sales_in").orderBy("created_at").get(),
                db1.collection("sales_out").orderBy("created_at").get(), db2.collection("sales_out").orderBy("created_at").get(), db3.collection("sales_out").orderBy("created_at").get(),
                db1.collection("car_order").orderBy("created_at").get(), db2.collection("car_order").orderBy("created_at").get(), db3.collection("car_order").orderBy("created_at").get(),
                db1.collection("order_in").orderBy("created_at").get(), db1.collection("order_in2").orderBy("created_at").get(), db2.collection("order_in").orderBy("created_at").get(), db3.collection("order_in").orderBy("created_at").get(),
                db1.collection("accounting").orderBy("created_at").get(), db2.collection("accounting").orderBy("created_at").get(), db3.collection("accounting").orderBy("created_at").get(),
                db1.collection("audit").orderBy("created_at").get(), db2.collection("audit").orderBy("created_at").get(), db3.collection("audit").orderBy("created_at").get(),
                db1.collection("out_Juty").orderBy("created_at").get(), db2.collection("out_Juty").orderBy("created_at").get(), db3.collection("out_Juty").orderBy("created_at").get()
            ]);

            postsDb1.value = postsResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            postsDb2.value = postsResponseDb2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            postsDb3.value = postsResponseDb3.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            sales_inDb1.value = sales_inResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            sales_inDb2.value = sales_inResponseDb2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            sales_inDb3.value = sales_inResponseDb3.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            sales_outDb1.value = sales_outResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            sales_outDb2.value = sales_outResponseDb2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            sales_outDb3.value = sales_outResponseDb3.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            car_orderDb1.value = car_orderResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            car_orderDb2.value = car_orderResponseDb2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            car_orderDb3.value = car_orderResponseDb3.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            order_inDb1.value = order_inResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            order_in2Db1.value = order_in2ResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            order_inDb2.value = order_inResponseDb2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            order_inDb3.value = order_inResponseDb3.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            accountingDb1.value = accountingResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            accountingDb2.value = accountingResponseDb2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            accountingDb3.value = accountingResponseDb3.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            auditDb1.value = auditResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            auditDb2.value = auditResponseDb2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            auditDb3.value = auditResponseDb3.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            out_JutyDb1.value = out_JutyResponseDb1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            out_JutyDb2.value = out_JutyResponseDb2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            out_JutyDb3.value = out_JutyResponseDb3.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        } catch (err) {
            error.value = `Error fetching data: ${err.message}`;
            console.error("Firestore data fetch error:", err);
        } finally {
            loading.value = false;
        }
    };

    const addPost = async (newPost) => {
        try {
            await db1.collection("g_posts").add({
                ...newPost,
                created_at: serverTimestamp()
            });
            await db2.collection("g_posts").add({
                ...newPost,
                created_at: serverTimestamp()
            });
            await db3.collection("g_posts").add({
                ...newPost,
                created_at: serverTimestamp()
            });
        } catch (err) {
            error.value = `Error adding post: ${err.message}`;
            console.error("Firestore add post error:", err);
        }
    };

    return {
        postsDb1, postsDb2, postsDb3, sales_inDb1, sales_inDb2, sales_inDb3, sales_outDb1, sales_outDb2, sales_outDb3, car_orderDb1, order_in2Db1, car_orderDb2, car_orderDb3, order_inDb1, order_inDb2, order_inDb3,
        accountingDb1, accountingDb2, accountingDb3, auditDb1, auditDb2, auditDb3, out_JutyDb1, out_JutyDb2, out_JutyDb3, error, loading, load, addPost
    };
};

export default getPosts;
