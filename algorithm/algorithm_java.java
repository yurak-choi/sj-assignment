import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
	private final static int MAX = 1000;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		List<Integer> primeList = new ArrayList<Integer>();
		boolean[] primes = new boolean[MAX];
		Arrays.fill(primes, true);
		for(int i = 2; i<MAX; i++) {
			if(primes[i]) {
				primeList.add(i);
				for(int j = i*2; j<MAX; j+=i) {
					primes[j] = false;
				}
			}
		}
		
		int testCase = Integer.parseInt(br.readLine());
		for(int t = 0; t<testCase; t++) {
			int k = Integer.parseInt(br.readLine());
			boolean flag = false;
			
			loop : for(int p1 : primeList) {
				for(int p2 : primeList) {
					for(int p3 : primeList) {
						if(p1+p2+p3==k) {
							System.out.println(p1+" "+p2+" "+p3);
							flag = true;
							break loop;
						}
					}
				}
			}
			if(!flag) System.out.println(0);
		}
	}
}
